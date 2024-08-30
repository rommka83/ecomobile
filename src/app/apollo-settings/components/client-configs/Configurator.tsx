import axios from 'axios';
import yaml from 'js-yaml';
import React from 'react';
import { createContext, FC, useContext, useEffect, useState } from 'react';
import { ReactNode } from 'react';

export interface Config {
  api: ConfigApi;
  //   indexPage: ConfigIndexPage;
  //   logo: ConfigLogo;
}

export interface ConfigApi {
  url: string;
  authKey: string;
}

// export interface ConfigLogo {
//   url: string;
//   style: CSSProperties;
// }

// export interface ConfigIndexPage {
//   favicon: string;
//   title: string;
// }

const domain = window.location.hostname;

const ConfigContext = createContext<Config | undefined>(undefined);

export function useConfig(): Config {
  const ctx = useContext(ConfigContext);

  if (!ctx) {
    throw new Error('Illegal state: ConfigContext must be defined.');
  }

  return ctx;
}

interface WithChildren {
  children: ReactNode;
}

export const Configuration: FC<WithChildren> = ({ children }) => {
  const [config, setConfig] = useState<Config>();

  useEffect(() => {
    loadDomainEnv(domain, 'config.yml')
      .then((it) => yaml.load(it) as Config)
      .then(setConfig);
  }, []);

  if (config === undefined) {
    return <></>;
  }

  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
};

// export function useHelp() {
//   const [value, set] = useState<string>();

//   useEffect(() => {
//     if (value === undefined) {
//       loadDomainEnv(domain, 'help.html').then(set);
//     }
//   }, [value]);

//   return value;
// }

// export function useFooter() {
//   const [value, set] = useState<string>();

//   useEffect(() => {
//     loadDomainEnv(domain, 'footer.html').then(set);
//   }, []);

//   return value;
// }

// export function useRelease() {
//   const [value, set] = useState({
//     release: '',
//     releasePopup: '',
//   });

//   useEffect(() => {
//     loadDomainEnv(domain, 'release.html')
//       .then((release) => {
//         loadDomainEnv(domain, 'release-popup.html').then((releasePopup) =>
//           set({ release, releasePopup }),
//         );
//       })
//       .catch(() => set({ release: false, releasePopup: false }));
//   }, []);

//   return value;
// }

async function loadDomainEnv(domain: string, file: string): Promise<string> {
  return (await axios.get('/configs/' + domain + '/' + file)).data;
}
