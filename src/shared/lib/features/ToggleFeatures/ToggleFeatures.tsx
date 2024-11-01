import { ReactElement } from 'react';

import { getFeatureFlags } from '../setGetFeatures';

import { FeatureFlags } from '@/shared/types/featureFlags';

interface ToggleFeaturesOptions {
    feature: keyof FeatureFlags;
    on: ReactElement;
    off: ReactElement;
}

export const ToggleFeatures = (props: ToggleFeaturesOptions) => {
    const { feature, off, on } = props;
    if (getFeatureFlags(feature)) {
        return on;
    }

    return off;
};
