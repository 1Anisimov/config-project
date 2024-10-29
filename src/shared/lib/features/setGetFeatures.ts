import { FeatureFlags } from '@/shared/types/featureFlags';

let featureFlags: FeatureFlags;

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags;
    }
}

export const getFeatureFlags = (flag: keyof FeatureFlags) => featureFlags[flag];
