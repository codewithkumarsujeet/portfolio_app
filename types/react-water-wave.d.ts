declare module 'react-water-wave' {
    import { ComponentType } from 'react';
  
    interface WaterWaveProps {
      imageUrl: string;
      dropradious?: string;
      perturbance?: string;
      resolution?: string;
      children?: () => React.ReactNode;
    }
  
    const WaterWave: ComponentType<WaterWaveProps>;
    export default WaterWave;
  }
  