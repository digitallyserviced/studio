import React from 'react';
import { observer } from 'mobx-react-lite';

import { useProjectStore } from '../../ProjectStore';
import { VertexShaderEditor } from './VertexShaderEditor';
import { FragmentShaderEditor } from './FragmentShaderEditor';
import { SettingsEditor } from './SettingsEditor';

export const Editor: React.FC = observer(() => {
  const projectStore = useProjectStore();

  switch (projectStore.tab) {
    case 'vertex':
      return <VertexShaderEditor />;
    case 'fragment':
      return <FragmentShaderEditor />;
    case 'settings':
      return <SettingsEditor />;
  }

  return null;
});
