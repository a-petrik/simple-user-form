import useForm from '../hooks/useForm';
import Buttons from '../molecules/Buttons';
import Section from '../organisms/Section';
import { buttonsSchema, formSchema } from '../schema/formSchema';

function Form() {
  const { handleSubmit, handleInputChange, formData } = useForm();

  const isFormValid = Object.values(formData).every((field) => field.isValid);

  return (
    <>
      <h1 id="title">あなたの情報を入力してください</h1>
      <form className="form" aria-labelledby="title" onSubmit={handleSubmit}>
        {formSchema.map((section) => (
          <Section
            key={section.id}
            section={section}
            handleInputChange={handleInputChange}
            formData={formData}
          />
        ))}
        <Buttons buttons={buttonsSchema} isFormValid={isFormValid} />
      </form>
    </>
  )
}

export default Form;
