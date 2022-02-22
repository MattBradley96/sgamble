import React from "react";
import { useTranslation } from "react-i18next";

interface InstallButtonProps {
  pwaInstall: (options: {
    title?: string;
    logo?: string;
    features?: React.ReactNode;
    featuresTitle?: string;
    description?: string;
    descritpionTitle?: string;
    instructionTitle?: string;
    instructionActionOk?: string;
    instructionActionCancel?: string;
    instructionActionInstall?: string;
    instructionIdeviceAction1?: string;
    instructionIdeviceAction2?: string;
    instructionFirefoxAction1?: string;
    instructionFirefoxAction2?: string;
    instructionFirefoxNewAction1?: string;
    instructionFirefoxNewAction2?: string;
    instructionOperaAction1?: string;
    instructionOperaAction2?: string;
    instructionNotSupported?: string;
  }) => Promise<void>;
}

export function InstallButton({ pwaInstall }: InstallButtonProps) {
  const { t } = useTranslation();

  return (null
  );
}
