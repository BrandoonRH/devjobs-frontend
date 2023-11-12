import clientAxios from "../config/axios";

const DescargarPDFButton = ({candidato}) => {
    //Config Peticiones HTTP 
    const token = localStorage.getItem('AUTH_TOKEN'); 

  const handleDescargarPDF = async () => {
    try {
      const response = await clientAxios(`/api/candidato/${candidato?.id}/download-pdf-file`, {
        responseType: 'blob', // Indicar que esperamos una respuesta de tipo blob (archivo)
        headers: {
            //'Content-Type': 'multipart/form-data', 
            Authorization: `Bearer ${token}`
        }
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'cv-candidato.pdf');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error al descargar el PDF:', error);
    }
  };

  return (
    <button
        type="button" className=" cursor-pointer inline-flex items-center shadow-md px-2.5 py-0.5 border border-gray-400 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-100"
        target="_blank"
        rel="noreferrer noopener"
        onClick={handleDescargarPDF}>
            Descargar CV
    </button>
  );
};

export default DescargarPDFButton;
