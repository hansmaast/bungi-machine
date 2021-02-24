import { useState } from 'react';
import { MenuButton } from '../style/menuButton';
import { MenuContainer } from '../style/menuContainer';
import { Title } from '../style/title';
import { GlobalTempoSlider } from './GlobalTempoSlider';
import { MasterVolumeSlider } from './MasterVolumeSlider';
import { SaveOrLoadPattern } from './SaveOrLoadPattern';
import { SelectDrumSampler } from './SelectDrumSampler';

export function SettingsMenu() {
  const [showSettings, setShowSettings] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowSettings(!showSettings);
  };
  return (
    <>
      <MenuButton forSettings right={0} isOpen={showSettings} onClick={toggleMenu}>
        {showSettings ? '𝗫' : '|||'}
      </MenuButton>
      <MenuContainer forSettings fromRight isOpen={showSettings} bg="white" justifyContent="space-between">
        <Title>Settings</Title>
        <SelectDrumSampler />
        <GlobalTempoSlider />
        <MasterVolumeSlider />
        <SaveOrLoadPattern />
      </MenuContainer>
    </>
  );
}
