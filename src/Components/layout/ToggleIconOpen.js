const ToggleIconOpen = (props) => {
  return (
    <div className={props.className} onClick={props.onClick}>
      <svg width="32" height="18" xmlns="http://www.w3.org/2000/svg">
        <g fill="#151515" fillRule="evenodd">
          <path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z" />
        </g>
      </svg>
    </div>
  );
};

export default ToggleIconOpen;
