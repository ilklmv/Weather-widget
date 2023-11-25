interface Coordinates {
    latitude: number;
    longitude: number;
}

const LocationService = { 
    getCurrentLocation: (): Promise<Coordinates> => {
        return new Promise<Coordinates>((resolve, reject) => {
            if('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        resolve({ latitude, longitude });
                    },
                    (error) => {
                        reject(error);
                    }
                );
            } else {
                reject(new Error('Этот браузер не поддерживает геолокацию.'));
            }
        });
    },
};

export default LocationService;