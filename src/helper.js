// get the years difference
export function getYearDifference(year) {
    return new Date().getFullYear() - year;
}

// calculate the insurance cost based on the origin
export function calculateOrigin(origin) {
    let increase;
    switch(origin) {
        case 'european':
            increase = 1.30;
            break;
        case 'american':
            increase = 1.15;
            break;
        case 'asiatic':
            increase = 1.05;
            break;
        default: 
            break;
    }

    return increase;
}

// calculete the insurance type
export function getPlan(plan) {
    return (plan === 'basic') ? 1.20 : 1.50;
}