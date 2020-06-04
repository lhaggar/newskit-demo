import {
  styled,
  getTypePresetFromTheme,
  getStylePresetFromTheme,
} from 'newskit';

export const TextBlock = styled.p`
  ${({ theme, overrides = {} }) =>
    getTypePresetFromTheme(
      theme.defaultPresets.textBlock.typePreset,
      'typePreset'
    )({ theme, typePreset: overrides.typePreset })};

  ${({ theme, overrides = {} }) =>
    getStylePresetFromTheme(
      theme.defaultPresets.textBlock.stylePreset,
      'stylePreset'
    )({ theme, stylePreset: overrides.stylePreset })};

  margin: 0;
  padding: 0;
`;
