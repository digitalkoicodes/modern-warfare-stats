export class MwStats {
    lifetime?: MwLifetimeStats
}

export class MwLifetimeStats{
    all?: {properties?: MwProperties}
}

export class MwProperties{
    kdRatio?: number;
}