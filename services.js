const predefinedResponses = {
    merhaba: "Merhaba! Size nasıl yardımcı olabilirim?",
    nasilsin: "İyiyim, teşekkür ederim. Size nasıl yardımcı olabilirim?",
    neYapabilirsin: "Size konum ve hava durumu hakkında bilgi verebilirim. Ayrıca harita ve hava kalitesi hakkında sorularınızı yanıtlayabilirim. Başka ne öğrenmek istersiniz?",
    tesekkur: "Rica ederim! Başka bir şey sormak ister misiniz?",
    iyiAksamlar: "İyi akşamlar, iyi geceler!",
    iyiGunler: "Size de iyi günler!",
    gunaydın: "Günaydın! Nasıl yardımcı olabilirim?",
    kirmizi: "Haritada bulunan kırmızı alanlar hava kalitesinin oldukça düşük olduğunu göstermektedir. mümkün oldukça kırmızı alanlarda bulunan konaklama yerlerinde konaklama :(",
    yesil: "Haritadaki yeşil alanlar konaklaman için oldukça iyi hava kalitesinin olduğunu gösteriyor. Bu alanda bulduğun güzel bir otel senin için çok keyifli olabilir :)",
    sari: "Sarı alanlar normal düzeydeki hava katmanlarını ifade etmektedir.",
    otelSecimi: "Senin konforun ve sağlığın için otelleri seçerken otellerin yıldız sayısına ve hava kalitesine göre bir ağırlıklı ortalama hesaplıyorum. İstersen daha detaylı açıklayabilirim :)\n\nOtel yıldız seviyelerini 0.3 katsayısıyla, hava kalitesinin derecesini 0.7 katsayısıyla çarpıp sana bir ağırlıklı ortalama hesaplıyorum. Hepsi senin için :))",
    hkmo: "HKMO (Harita ve Kadastro Mühendisleri Odası) genel başkanı Ali İpek'tir.",
    default: "Üzgünüm, tam anlayamadım. Konum, hava durumu, hava kalitesi veya oteller hakkında bilgi almak ister misiniz?"
};

export const getOpenAIResponse = async (message) => {
    try {
        const lowerMessage = message.toLowerCase();

        // Temel selamlaşma ve vedalaşma
        if (lowerMessage.includes('merhaba') || lowerMessage.includes('selam')) {
            return predefinedResponses.merhaba;
        }
        if (lowerMessage.includes('nasilsin')) {
            return predefinedResponses.nasilsin;
        }
        if (lowerMessage.includes('ne yapabilirsin') || lowerMessage.includes('yardım')) {
            return predefinedResponses.neYapabilirsin;
        }
        if (lowerMessage.includes('teşekkür')) {
            return predefinedResponses.tesekkur;
        }
        if (lowerMessage.includes('iyi akşamlar')) {
            return predefinedResponses.iyiAksamlar;
        }
        if (lowerMessage.includes('iyi günler')) {
            return predefinedResponses.iyiGunler;
        }
        if (lowerMessage.includes('günaydin')) {
            return predefinedResponses.gunaydın;
        }

        // Harita ve hava kalitesi soruları - daha esnek eşleştirme
        if (lowerMessage.includes('kırmızı') ||
            (lowerMessage.includes('kirmizi')) ||
            (lowerMessage.includes('harita') && lowerMessage.includes('kırmızı')) ||
            (lowerMessage.includes('harita') && lowerMessage.includes('kirmizi')) ||
            (lowerMessage.includes('kırmızı') && lowerMessage.includes('renk')) ||
            (lowerMessage.includes('kirmizi') && lowerMessage.includes('renk')) ||
            (lowerMessage.includes('kırmızı') && lowerMessage.includes('alan')) ||
            (lowerMessage.includes('kirmizi') && lowerMessage.includes('alan'))) {
            return predefinedResponses.kirmizi;
        }
        if (lowerMessage.includes('yeşil') || lowerMessage.includes('yesil')) {
            return predefinedResponses.yesil;
        }
        if (lowerMessage.includes('sarı') || lowerMessage.includes('sari') ||
            (lowerMessage.includes('sarı') && lowerMessage.includes('alan')) ||
            (lowerMessage.includes('sari') && lowerMessage.includes('alan'))) {
            return predefinedResponses.sari;
        }
        if (lowerMessage.includes('otel') && (
            lowerMessage.includes('seç') ||
            lowerMessage.includes('nasıl') ||
            lowerMessage.includes('neye göre') ||
            lowerMessage.includes('belirle')
        )) {
            return predefinedResponses.otelSecimi;
        }
        if (lowerMessage.includes('en iyi') && lowerMessage.includes('otel') ||
            lowerMessage.includes('oteli bul') ||
            (lowerMessage.includes('otel') && lowerMessage.includes('bul')) ||
            (lowerMessage.includes('uygun') && lowerMessage.includes('otel'))) {
            return "Haritada seçtiğiniz konuma göre en iyi oteli bulmak için önce haritadan bir konum seçin ve arama yarıçapını belirleyin, ardından 'En Uygun Oteli Bul' butonuna tıklayın. Size hava kalitesi ve otel yıldızlarını değerlendirerek en iyi oteli göstereceğim! 🏨✨";
        }
        if (lowerMessage.includes('hkmo') ||
            (lowerMessage.includes('başkan') && lowerMessage.includes('kim')) ||
            (lowerMessage.includes('genel') && lowerMessage.includes('başkan'))) {
            return predefinedResponses.hkmo;
        }

        // Eğer özel bir eşleşme bulunamazsa
        return predefinedResponses.default;
    } catch (error) {
        console.error('Response Error:', error);
        return 'Üzgünüm, şu anda yanıt veremiyorum. Lütfen tekrar deneyin.';
    }
};

export const getWeatherData = async (latitude, longitude) => {
    try {
        const API_KEY = '33c8e4cb3fa6c93648cef3608ad3380c'; // OpenWeather API Key
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=tr`
        );

        if (!response.ok) {
            throw new Error('Weather API error');
        }

        const data = await response.json();

        if (data.cod === 200) {
            return {
                temperature: Math.round(data.main.temp),
                description: data.weather[0].description,
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                icon: data.weather[0].icon
            };
        } else {
            throw new Error('Weather data not available');
        }
    } catch (error) {
        console.error('Weather API Error:', error);
        throw error;
    }
}; 