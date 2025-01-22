import { Button, Space } from "antd";

export const Boton = ({
  text,
  icon,
  size,
  type,
  estilo,
  htmlTipo,
  onClick,
}) => {
  return (
    <Space className="site-button-ghost-wrapper" wrap>
      <Button
        size={size}
        type={type}
        icon={icon}
        className={estilo}
        htmlType={htmlTipo}
        onClick={onClick}
      >
        {text}
      </Button>
    </Space>
  );
};

