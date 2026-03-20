export interface MockUser {
    id: string;
    name: string;
    score: number;
    avatarUrl: string;
    isMe: boolean;
    rank?: number;
    isUnranked?: boolean;
}

export function generateMockLeaderboardData(maxScore: number, totalCount: number = 10000): MockUser[] {
    const firstNames = ['Aarav', 'Vivaan', 'Aditya', 'Vihaan', 'Arjun', 'Sai', 'Reyansh', 'Ayaan', 'Krishna', 'Ishaan', 'Shaurya', 'Atharv', 'Kabir', 'Aman', 'Rudra', 'Ananya', 'Aadhya', 'Diya', 'Kavya', 'Saanvi', 'Myra', 'Ira', 'Ahana', 'Anika', 'Tara', 'Riya', 'Navya', 'Zara', 'Meera', 'Rishi', 'Karan', 'Sneha', 'Rahul', 'Neha', 'Priya', 'Simran', 'Vikram', 'Rohan', 'Shruti', 'Pooja', 'Sunil', 'Kunal', 'Arun', 'Rajat'];
    const lastNames = ['Sharma', 'Verma', 'Singh', 'Gupta', 'Patel', 'Kumar', 'Reddy', 'Das', 'Jain', 'Mehta', 'Roy', 'Agarwal', 'Chatterjee', 'Nair', 'Pillai', 'Rajput', 'Jha', 'Pandey', 'Mishra', 'Bose', 'Sengupta', 'Yadav', 'Rao', 'Chowdhury', 'Dubey', 'Kaur', 'Shetty', 'Bhatia', 'Kulkarni', 'Desai'];
    
    // Deterministic random number generator using LCG logic
    let tempSeed = 42;
    const seededRandom = () => {
        tempSeed = (tempSeed * 9301 + 49297) % 233280;
        return tempSeed / 233280;
    };

    const mockData: MockUser[] = [];
    
    // Modeling realistic test score densities (bell curve or exponential drop)
    for (let i = 0; i < totalCount; i++) {
        const randFN = firstNames[Math.floor(seededRandom() * firstNames.length)];
        const randLN = lastNames[Math.floor(seededRandom() * lastNames.length)];
        const name = `${randFN} ${randLN}`;
        
        // Use a steep cubic polynomial distribution to assign rank scores
        // Top 10 ranks will be extremely close to maxScore, middle ranks cluster densely around 50-60%.
        const percentile = 1 - (i / totalCount); 
        const curve = Math.pow(percentile, 3.5); 
        
        // Random noise +/- slightly
        const noise = Math.floor(seededRandom() * 6) - 3;
        
        // Base calculated score
        let score = Math.round((maxScore * 0.15) + (curve * (maxScore * 0.85))) + noise;
        score = Math.min(maxScore, Math.max(0, score));

        // For the very top 3, let's fix them manually for aesthetics
        if (i === 0) score = maxScore;
        if (i === 1) score = maxScore - Math.max(1, Math.floor(maxScore * 0.01));
        if (i === 2) score = maxScore - Math.max(2, Math.floor(maxScore * 0.02));

        mockData.push({
            id: `mock-${i}`,
            name,
            score,
            avatarUrl: `https://ui-avatars.com/api/?name=${randFN}+${randLN}&background=random`,
            isMe: false,
        });
    }

    // Mathematically sort so scores are strictly decreasing
    mockData.sort((a,b) => b.score - a.score);
    
    // Assign computed monotonically increasing ranks
    mockData.forEach((u, i) => {
        u.rank = i + 1;
    });

    return mockData;
}
