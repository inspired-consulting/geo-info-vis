
interface GeoInfo {
    contact: {
        name: string,
        avatar_url?: string
    },
    info: {
        status: string,
        status_detail: string,
        task: string,
        category: string,
        expected_volume: string,
    },
    location: {
        address: string
    }
}

function info(status: string, detail: string, task: string, category: string, vol: string) {
    return {
        status: "Work in progress",
        status_detail: "Inception",
        task: "acquisition",
        category: "Medical",
        expected_volume: "100.000 EUR",
    }
}

function contact(name: string, avatar_url?: string) {
    return {
        name: name,
        avatar_url: avatar_url
    }
}

function location(address: string) {
    return {
        address: address
    }
}

let mock_data : GeoInfo[] = [
    {
        contact: contact("Kim Johnson"),
        info: info("Work in progress", "Inception", "acquisition", "Medical", "100.000 - 120.000 EUR"),
        location: location("Aachener Str. 382, 50933 Köln")
    },
    {
        contact: contact("Zoe LeCarre"),
        info: info("Closed", "Success", "none", "Industry", "272.000 EUR"),
        location: location("Europapl. 1, 53721 Siegburg")
    }
]

export default mock_data;