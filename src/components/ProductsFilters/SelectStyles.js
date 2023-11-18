// import { useMediaQuery } from 'react-responsive';

export const customStyles = {
  option: (defaultStyles, state) => ({
    ...defaultStyles,
    fontSize: '14px',
    height: '52px',
    color: state.isSelected ? '#E6533C' : '#EFEDE8',
    backgroundColor: state.isSelected
      ? 'rgba(28, 28, 28, 1)'
      : state.isFocused
      ? 'rgba(28, 28, 28, 1)'
      : 'rgba(28, 28, 28, 1)', // Стилізація фона активної опції и ховера
    padding: '14px 32px 14px 14px',
  }),

  singleValue: (defaultStyles) => ({
    ...defaultStyles,
    color: '#EFEDE8',
  }),
  menu: (defaultStyles) => ({
    ...defaultStyles,
    backgroundColor: 'rgba(28, 28, 28, 1)', //фон списку
    // overflowY: 'auto',
  }),
  indicatorSeparator: (defaultStyles) => ({
    ...defaultStyles,
    backgroundColor: 'transparent', // колір розділювача
  }),
  dropdownIndicator: (defaultStyles) => ({
    ...defaultStyles,
    color: '#EFEDE8',
  }),
  container: (defaultStyles, state) => ({
    ...defaultStyles,
    border: `1px solid ${
      state.isFocused ? '#E6533C' : 'rgba(239, 237, 232, 0.3)'
    }`,
    borderRadius: '12px',
    outline: 'none',
  }),
  menuList: (base) => ({
    ...base,
    overflowY: 'auto', // Вмикаємо скрол
    marginTop: '14px',
    marginRight: '7px',
    '&::-webkit-scrollbar': {
      width: '8px', // Задаємо ширину скрола
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'rgba(239, 237, 232, 0.10)', //колір скрола
      borderRadius: '12px', //радіус бордера скрола
    },
  }),
  placeholder: (defaultStyles) => ({
    ...defaultStyles,
    fontSize: '14px',
    lineHeight: '1.28',
    margin: '0',
    padding: '0',
  }),
};

export const firstSelectStyles = {
  ...customStyles,
  control: (defaultStyles, state) => ({
    ...defaultStyles,
    background: 'transparent',
    borderRadius: '12px',
    border: `${state.isFocused ? '#E6533C' : 'rgba(239, 237, 232, 0.3)'}`, // колір рамки,
    '&:hover': {
      border: '1px solid #E6533C', //колір рамки при ховері
    },
    appearance: 'none', // Removing default appearance
    WebkitAppearance: 'none',
    MozAppearance: 'none',

    '@media screen and (min-width: 375px)': {
      width: '146px',
      height: '46px',
      fontSize: '14px',
      lineHeight: '1.28',
    },

    '@media screen and (min-width: 768px)': {
      width: '192px',
      height: '52px',
      fontSize: '16px',
      lineHeight: '1.5',
    },
  }),
};

export const secondSelectStyles = {
  ...customStyles,
  control: (defaultStyles, state) => ({
    ...defaultStyles,
    background: 'transparent',
    borderRadius: '12px',
    border: `${state.isFocused ? '#E6533C' : 'rgba(239, 237, 232, 0.3)'}`, // колір рамки,
    '&:hover': {
      border: '1px solid #E6533C', //колір рамки при ховері
    },
    appearance: 'none', // Removing default appearance
    WebkitAppearance: 'none',
    MozAppearance: 'none',

    '@media screen and (min-width: 375px)': {
      width: '173px',
      height: '46px',
      fontSize: '14px',
      lineHeight: '1.28',
    },

    '@media screen and (min-width: 768px)': {
      width: '204px',
      height: '52px',
      fontSize: '16px',
      lineHeight: '1.5',
    },
  }),
};
