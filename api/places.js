export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const appSecret = req.headers['x-app-secret'];
  if (appSecret !== process.env.APP_SECRET) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { query, lat, lng, type } = req.query;

  if (!lat || !lng) {
    return res.status(400).json({ error: 'lat and lng are required' });
  }

  const typeMapping = {
    hospital: 'hospital',
    pharmacy: 'pharmacy',
    doctor: 'doctor',
  };

  const includedTypes = type && typeMapping[type] ? [typeMapping[type]] : ['hospital'];

  try {
    const body = {
      includedTypes,
      maxResultCount: 20,
      locationRestriction: {
        circle: {
          center: {
            latitude: parseFloat(lat),
            longitude: parseFloat(lng),
          },
          radius: 5000.0,
        },
      },
    };

    if (query) {
      body.textQuery = query;
    }

    const response = await fetch('https://places.googleapis.com/v1/places:searchNearby', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': process.env.GOOGLE_PLACES_API_KEY,
        'X-Goog-FieldMask':
          'places.displayName,places.formattedAddress,places.location,places.rating,places.currentOpeningHours,places.id',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.error?.message || 'Places API error' });
    }

    const places = (data.places || []).map((place) => ({
      id: place.id,
      name: place.displayName?.text || '',
      address: place.formattedAddress || '',
      location: place.location || null,
      rating: place.rating || null,
      openNow: place.currentOpeningHours?.openNow ?? null,
    }));

    return res.status(200).json({ places });
  } catch (error) {
    return res.status(500).json({ error: 'Proxy error' });
  }
}
