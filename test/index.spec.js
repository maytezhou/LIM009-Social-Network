// importamos la funcion que vamos a testear
<<<<<<< HEAD
import { signUpOnSubmit } from "../src/controller/controller1.js";
import { signInOnSubmit} from '../src/controller/controller1.js'
  
describe('signInOnSubmit', () => {
  it('Deberia poder iniciar sesión  con email: test@test.la y password:abc123') // asercion 
  //test con jest */
  addNote()
});

describe('signUpOnSubmit', () => {
  it('debería poder registrarme', () => {
    expect(typeof myFunction).toBe('function');
  });
});

//Creando mi firebase falso 
//
const auth = () => {
  return {
      signInWithEmailAndPassword: (emailLogIn, passwordLogIn) => {
          return new Promise((resolve) => {
              resolve({
                  email: emailLogIn,
              })
          })
      }
  }
};

const firebase = {
  auth: auth,
  // initializeApp() {}
};
export default jest.fn(() => {
  return firebase
}) 
=======
import {signUp, signIn ,signInWithGoogle ,signInWithFacebook} from "../src/services/firebase.js";

const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
 // use null if your code does not use RTDB
 path => (path ? mockdatabase.child(path) : null),
 () => mockauth,
 () => mockfirestore
);

describe('signUp', () => {
  it('debería ser una función', () => {
    expect(typeof signUp).toBe('function');
  });
  it('Debería poder registrar con un usuario y contraseña', () => {
    return signUp('user@laboratoria.la', 'aloha123')
      .then((user) => {
        expect(user.email).toEqual('user@laboratoria.la');
      });
  });
 });
 
describe('singIn', () => {
  it('debería ser una función', () => {
    expect(typeof signIn).toBe('function');
  });
  it('deberia retornar el email: abc@gmail.com', () => {
    return signIn('abc@gmail.com', '123456')
      .then(user => {
        expect(user.email).toEqual('abc@gmail.com')      
      });
  });
});
describe('signInWithGoogle', () => {
  it('debería ser una función', () => {
    expect(typeof signInWithGoogle).toBe('function');
  });
  it('Debería poder iniciar sesion con Google', () => {
    return signInWithGoogle()
      .then(() => {
        expect().toEqual();
      });
  });
 });

 describe('signInWithFacebook', () => {
  it('debería ser una función', () => {
    expect(typeof signInWithFacebook).toBe('function');
  });
  it('Debería poder iniciar sesion con Google', () => {
    return signInWithFacebook()
      .then((user) => {
        expect().toEqual();
      });
  });
 });
>>>>>>> 427053589576d695dff425aef6e75a41a7d16be5
