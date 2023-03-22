export const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    width: '275px',
    padding: 2,
    fontSize: '14px',
    color: 'C7CCDC',
  }),

  control: (_, { selectProps: { width } }) => ({
    display: 'flex',
    height: '44px',
    fontSize: '12px',
    lineHeight: '14px',
    paddingLeft: '19px',
    color: '#52555F',
  }),

  placeholder: defaultStyles => {
    return {
      ...defaultStyles,
      color: '#C7CCDC',
      margin: 0,
      fontFamily: 'inherit',
    };
  },
  input: defaultStyles => {
    return {
      ...defaultStyles,
      width: '106px',
    };
  },
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      color: isDisabled ? '#ccc' : isSelected ? '#52555F' : data.color,
    };
  },
  indicatorSeparator: styles => ({ display: 'none' }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    const color = '#52555F';

    return { ...provided, opacity, transition, color };
  },
};
