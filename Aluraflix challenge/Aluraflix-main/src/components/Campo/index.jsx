import { Form, Input, Select } from "antd";
import styled from "styled-components";

const FormItem = styled(Form.Item)`
  margin: 0;
`;

export const Campo = ({
  name,
  rules,
  textPlaceholder,
  tamanio,
  clase,
  tipo,
  status,
  maxLength,
  minLength,
  value,
  onChange,
}) => {
  return (
    <FormItem name={name} rules={rules}>
      <Input
        placeholder={textPlaceholder}
        size={tamanio}
        className={clase}
        type={tipo}
        status={status}
        maxLength={maxLength}
        minLength={minLength}
        value={value}
        onChange={onChange}
      />
    </FormItem>
  );
};

export const CampoSelect = ({
  name,
  rules,
  placeholder,
  clase,
  tamanio,
  children,
  onChange,
}) => {
  return (
    <FormItem name={name} rules={rules} className={clase}>
      <Select
        size={tamanio}
        dropdownStyle={{ backgroundColor: "#ccc" }}
        placeholder={placeholder}
        onChange={onChange}
      >
        {children}
      </Select>
    </FormItem>
  );
};

