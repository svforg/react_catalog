import {observable, computed, action} from "mobx";

//class FormData
export default class{
  constructor(rootStore){
    this.rootStore = rootStore;
  }

  @observable fields = {
    name: {
      label: 'Your name',
      value: '',
      validator: val => /^[aA-zZ ]{2,}$/.test(val),
      errorText: 'Латинские буквы не менее 2',
      valid: null
    },
    email: {
      label: 'Your email',
      value: '',
      validator: val => /^.+@.+$/.test(val),
      errorText: 'нужна Собака',
      valid: null
    },
    phone: {
      label: 'Your phone',
      value: '',
      validator: val => /^[0-9 ]{7,15}$/.test(val),
      errorText: 'от 7 до 15 цифр',
      valid: null
    },
  };

  @computed get formValid(){
    return Object.values(this.fields).every(field => field.valid);
  }

  @computed get getData(){
    let data = {};

    for (let name in this.fields) {
      data[name] = this.fields[name].value;
    }

    return data;
  }

  @action updateValue(name, newValue) {
    let field = this.fields[name];
    field.value = newValue;
    field.valid = field.validator(field.value);
  }
}
