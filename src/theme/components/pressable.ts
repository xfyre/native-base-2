import { mode } from '../tools';

const baseStyle = (props: any) => {
  const { primary } = props.theme.colors;
  const focusRing = mode(
    {
      boxShadow: `${primary[400]} 0px 0px 0px 2px`,
    },
    {
      boxShadow: `${primary[500]} 0px 0px 0px 2px`,
    }
  )(props);

  return {
    _focusVisible: {
      _web: { style: { ...focusRing, outlineWidth: 0 } },
    },
  };
};

export default {
  baseStyle,
  defaultProps: {
    _hover: {
      bg: 'blue.500',
      _hover: {
        bg: 'amber.500',
      },
      // _checked: {
      //   bg: 'amber.500',
      // },
    },
    bg: 'red.500',
  },
};
