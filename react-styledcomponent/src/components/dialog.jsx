import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import Button from "./button";

const fadeIn = keyframes`
    from {
        opacity : 0;
    }
    to {
        opacity : 1;
    }
`;

const fadeOut = keyframes`
    from {
        opacity : 1;
    }
    to {
        opacity : 0;
    }
`;

const slideUp = keyframes`
    from {
        transform : translateY(200px);
    }
    to {
        transform : translateY(0px);
    }
`;

const slideDown = keyframes`
    from {
        transform : translateY(0px);
    }
    to {
        transform : translateY(200px);
    }
`;

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  animation: ${fadeIn} 0.25s ease-out forwards;

  ${(props) =>
    props.disappear &&
    css`
      animation: ${fadeOut};
    `}
`;

const DialogBlock = styled.div`
  width: 320px;
  padding: 1.5rem;
  background: white;
  border-radius: 2px;
  h3 {
    margin: 0;
    font-size: 1.5rem;
  }
  p {
    font-size: 1.125rem;
  }
  animation: ${slideUp} 0.25s ease-out forwards;
  ${(props) =>
    props.disappear &&
    css`
      animation: ${slideDown};
    `}
`;

const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
`;

const ShortMarginButton = styled(Button)`
  & + & {
    margin-left: 0.5rem;
  }
`;

const Dialog = ({
  title,
  children,
  confirmText,
  cancelText,
  visible,
  onConfirm,
  onCancel,
}) => {
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(visible);

  useEffect(() => {
    // visible true -> false
    if (localVisible && !visible) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setLocalVisible(visible);
  }, [localVisible, visible]);

  if (!localVisible && !animate) return null;
  // true 일때 아무것도 안보임 false 일때 보임
  return (
    <DarkBackground disappear={!visible}>
      <DialogBlock disappear={!visible}>
        <h3>{title}</h3>
        <p>{children}</p>
        <ButtonGroup>
          <ShortMarginButton color="gray" onClick={onCancel}>
            {cancelText}
          </ShortMarginButton>
          <ShortMarginButton color="pink" onClick={onConfirm}>
            {confirmText}
          </ShortMarginButton>
        </ButtonGroup>
      </DialogBlock>
    </DarkBackground>
  );
};

Dialog.defaultProps = {
  cancelText: "취소",
  confirmText: "삭제",
};

export default Dialog;
