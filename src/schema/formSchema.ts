import type { ButtonSchema, FormSchema } from '../types/formTypes';

export const formSchema: FormSchema = [
  {
    id: 1,
    title: '名前',
    fields: [
      {
        id: 1,
        name: 'lastName',
        label: '姓',
        type: 'text',
        required: true,
        regex: /^[^$?!@<>[\]()/;:0-9,\.]+$/,
        errorText: '記号数字は使用できません',
      },
      {
        id: 2,
        name: 'firstName',
        label: '名',
        type: 'text',
        required: true,
        regex: /^[^$?!@<>[\]()/;:0-9,\.]+$/,
        errorText: '記号数字は使用できません',
      },
      {
        id: 3,
        name: 'lastNameKatakana',
        label: '氏（カタカナ）',
        type: 'text',
        required: true,
        regex: /^[\u30A0-\u30FFー]+$/,
        errorText: 'カタカナ以外は使用できません',
      },
      {
        id: 4,
        name: 'firstNameKatakana',
        label: '名（カタカナ）',
        type: 'text',
        required: true,
        regex: /^[\u30A0-\u30FFー]+$/,
        errorText: 'カタカナ以外は使用できません',
      },
    ],
  },
  {
    id: 2,
    title: '年齢・性別',
    fields: [
      {
        id: 1,
        name: 'gender',
        label: '性別',
        type: 'radio',
        required: true,
        regex: /^male|female|other$/,
        errorText: '',
        options: [
          {
            id: 1,
            value: 'male',
            text: '男性',
          },
          {
            id: 2,
            value: 'female',
            text: '女性',
          },
          {
            id: 3,
            value: 'other',
            text: '無回答・その他',
          },
        ],
      },
      {
        id: 2,
        name: 'age',
        label: '年齢',
        type: 'text',
        required: true,
        regex: /^\d+$/,
        errorText: '半角数字以外は使用できません',
      },
    ],
  },
];

export const buttonsSchema: ButtonSchema[] = [
  {
    id: 1,
    value: '次へ',
    type: 'submit',
  },
  {
    id: 2,
    value: '戻る',
    type: 'button',
  },
];