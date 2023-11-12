import { createRef,useState, useCallback } from "react";
import { useAuth } from "../../hooks/useAuth";
import Alert from "../../components/Alert";


const Auth = () => {
   const {login, register} = useAuth({middleware: 'guest', url: '/'}); 

   const nameRef = createRef(); 
   const emailRef = createRef(); 
   const passwordRef = createRef(); 
   const passwordConfirmationRef = createRef(); 
   const rolRef = createRef(); 

   const [variant, setVariant] = useState('login'); 
   const [errors, setErrors] = useState([]); 

   const toggleVariant = useCallback(() => {
      setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
      // Restablecer los valores de los campos de referencia
      if (nameRef.current) {
          nameRef.current.value = ''; // Limpiar el campo de nombre si existe
      }
      if (emailRef.current) {
          emailRef.current.value = ''; // Limpiar el campo de correo electrónico si existe
      }
      if (passwordRef.current) {
          passwordRef.current.value = ''; // Limpiar el campo de contraseña si existe
      }
      if (passwordConfirmationRef.current) {
          passwordConfirmationRef.current.value = ''; // Limpiar el campo de confirmación de contraseña si existe
      }
      if (rolRef.current) {
          rolRef.current.value = ''; // Limpiar el campo de rol si existe
      }
      setErrors([]); 
   },[nameRef, emailRef, passwordRef, passwordConfirmationRef, rolRef]);


  const handleSubmitLogin = async (e) =>  {
    e.preventDefault();
    const dataLogin = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }
   login(dataLogin, setErrors); 
  }

  const handleSubmitRegister = async (e) =>  {
    e.preventDefault();
    const dataRegister = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
      rol: parseInt(rolRef.current.value)
    }
    //console.log(data); 
    register(dataRegister, setErrors);
  }


  return (
      <>
          <h2 className='text-4xl font-bold text-center mt-10 md:mt-0'>
              {variant === 'login' ? 'Iniciar Sesión' : 'Registrarse'}
          </h2>
          {variant === 'register' && (
            <p className="text-center mb-5">Crea tu Cuenta Llenando el Formulario</p>      
          )}
          <div >
              <form
                noValidate
                onSubmit={variant === 'login' ? handleSubmitLogin : handleSubmitRegister}
              >
                {errors ? errors.map((error, i) => <Alert key={i}>{error}</Alert>) : null}

                  {variant === 'register' && (
                     <div className="mb-4">
                        <label className="text-slate-800" htmlFor="name">Nombre:</label>
                        <input ref={nameRef} className="mt-2 w-full p-3 bg-gray-100" type="text" name="name" id="name" placeholder="Tú Nombre"/>
                     </div>
                  )}
                     <div className="mb-4">
                        <label className="text-slate-800" htmlFor="email">Email:</label>
                        <input ref={emailRef} className="mt-2 w-full p-3 bg-gray-100" type="email" name="email" id="email" placeholder="Tú Email"/>
                     </div>
                     <div className="mb-4">
                        <label className="text-slate-800" htmlFor="password">Password:</label>
                        <input ref={passwordRef} className="mt-2 w-full p-3 bg-gray-100" type="password" name="password" id="password" placeholder="Tú Password"/>
                     </div>
                    {variant === 'register' && (
                      <>
                          <div className="mb-4">
                            <label className="text-slate-800" htmlFor="password_confirmation">Confirmar Password:</label>
                            <input ref={passwordConfirmationRef} className="mt-2 w-full p-3 bg-gray-100" type="password" name="password_confirmation" id="password_confirmation" placeholder="Repite tú Password"/>
                          </div>

                          <div className="mb-4">
                              <label className="text-slate-800" htmlFor="rol">¿Qué tipo de cuenta deseas?</label>
                              <select ref={rolRef} name="rol" id="rol" className="mt-2 rounded-md p-3 shadow-sm border-gray-400 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-full">
                                <option value="">-- Selecciona un rol --</option>
                                <option value="1">Developer</option>
                                <option value="2">Reclutador</option>
                              </select>
                          </div>
                      </>
                    )}
                <button type="submit"  className="bg-indigo-500 py-3 text-white rounded-md w-full mt-10 hover:font-extrabold hover:bg-indigo-700 transition">
                    {variant === 'login' ? 'Iniciar Sesión' : 'Registrarse'}
                </button>
              </form>
          </div>
         
          <p className="text-neutral-500 mt-12">
              {variant === 'login' ? '¿Aún no tienes cuenta?' : '¿Ya tienes cuenta?'}
              <span onClick={toggleVariant} className=" ml-1 hover:underline cursor-pointer">
                  {variant === 'login' ? 'Crear Cuenta ' : 'Iniciar Sesión'}
              </span>
          </p>
      </>
            
  )

}

export default Auth