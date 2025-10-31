declare module 'fslightbox-react' {
  interface FsLightboxProps {
    toggler?: boolean;
    sources?: string[];
    slide?: number;
    onOpen?: () => void;
    onClose?: () => void;
    onShow?: () => void;
    onInit?: () => void;
    loadOnlyCurrentSource?: boolean;
    showThumbsOnMount?: boolean;
    disablePanzoom?: boolean;
    customAttributes?: Record<string, string>;
    onInit?: () => void;
    onOpen?: () => void;
    onClose?: () => void;
    onShow?: () => void;
    onBeforeClose?: () => void;
    onBeforeShow?: () => void;
    onBeforeOpen?: () => void;
    onBeforeInit?: () => void;
    onAfterClose?: () => void;
    onAfterShow?: () => void;
    onAfterOpen?: () => void;
    onAfterInit?: () => void;
  }

  const FsLightbox: React.FC<FsLightboxProps>;
  export default FsLightbox;
}
