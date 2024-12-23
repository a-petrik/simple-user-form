import Button from '../atoms/Button';
import type { ButtonsProps } from '../types/formTypes';

function Buttons({ isFormValid, buttons }: ButtonsProps) {
  return (
    <div className="form__buttons">
      {buttons.map((button) => (
        <Button
          key={button.id}
          type={button.type}
          value={button.value}
          disabled={button.type === 'submit' && !isFormValid}
        />
      ))}
    </div>
  );
}

export default Buttons;