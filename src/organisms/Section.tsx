import Field from '../molecules/Field';
import FieldSet from '../molecules/FieldSet';
import type { SectionProps } from '../types/formTypes';

function Section({ section, handleInputChange, formData }: SectionProps) {
  return (
    <section className="form__section">
      <h2 className="form__section__title">{section.title}</h2>
      {section.fields.map((field) => {
        const commonProps = {
          name: field.name,
          label: field.label,
          value: formData[field.name].value,
          handleInputChange,
          required: field.required,
        };
        if (field.type === 'radio') {
          return (
            <FieldSet
              {...commonProps}
              key={field.id}
              options={field.options!}
            />
          );
        }
        return (
          <Field
            {...commonProps}
            key={field.id}
            showError={formData[field.name].showError}
            errorText={field.errorText}
          />
        );
      })}
    </section>
  );
};

export default Section;