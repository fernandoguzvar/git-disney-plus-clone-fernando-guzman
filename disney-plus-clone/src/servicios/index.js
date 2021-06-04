import axios from "axios";

//peliculasssssssssssssssssssssssssssssssssssssssssssssssssss
const baseurl_movie = process.env.REACT_APP_BASE_URL_movie;
export async function getMovie() {
  try {
    const response = await axios({
      url: `${baseurl_movie}/view_listar_movie`,
      method: "GET",
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function Addmovie(form) {
  try {
    const response = await axios({
      url: `${baseurl_movie}/view_agregar_movie`,
      method: "POST",
      data: form,
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function UpdateMovie(form) {
  try {
    const response = await axios({
      url: `${baseurl_movie}/view_modificar_movie/${form.id_movie}`,
      method: "PUT",
      data: form,
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function eliminarmovie(id_movie) {
  console.log(id_movie);

  try {
    const response = await axios({
      url: `${baseurl_movie}/view_eliminar_movie/${id_movie}`,
      method: "DELETE",
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}


const baseurl_dispositivo = process.env.REACT_APP_BASE_URL_dispositivo;
export async function getDispositivo() {
  try {
    const response = await axios({
      url: `${baseurl_dispositivo}/view_listar_dispositivo`,
      method: "GET",
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}


export async function getMovieoriginal() {
  try {
    const response = await axios({
      url: `${baseurl_movie}/view_listar_movie_original`,
      method: "GET",
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function getMovieserie() {
  try {
    const response = await axios({
      url: `${baseurl_movie}/view_listar_movie_serie`,
      method: "GET",
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}


const baseurl_usuario = process.env.REACT_APP_BASE_URL_usuario;
export async function Addusuario(form) {
  try {
    const response = await axios({
      url: `${baseurl_usuario}/view_agregar_usuario`,
      method: "POST",
      data: form,
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}


export async function getusuario() {
  try {
    const response = await axios({
      url: `${baseurl_usuario}/view_listar_usuario`,
      method: "GET",
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}

const baseurl_venta = process.env.REACT_APP_BASE_URL_venta;
export async function Addventa(form) {
  try {
    const response = await axios({
      url: `${baseurl_venta}/view_agregar_venta`,
      method: "POST",
      data: form,
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}


export async function getventa() {
  try {
    const response = await axios({
      url: `${baseurl_venta}/view_listar_venta`,
      method: "GET",
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}


//sliderrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
const baseurl_slider = process.env.REACT_APP_BASE_URL_slider;
export async function getslider() {
  try {
    const response = await axios({
      url: `${baseurl_slider}/view_listar_slider`,
      method: "GET",
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function Addslider(form) {
  try {
    const response = await axios({
      url: `${baseurl_slider}/view_agregar_slider`,
      method: "POST",
      data: form,
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function Updateslider(form) {
  try {
    const response = await axios({
      url: `${baseurl_slider}/view_modificar_slider/${form.id_slider}`,
      method: "PUT",
      data: form,
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function eliminarslider(id_slider) {
  console.log(id_slider);

  try {
    const response = await axios({
      url: `${baseurl_slider}/view_eliminar_slider/${id_slider}`,
      method: "DELETE",
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}


//viewersssssssssssssssssssssssssssssssssssssssssssssssssssss
const baseurl_viewers = process.env.REACT_APP_BASE_URL_viewers;
export async function getviewers() {
  try {
    const response = await axios({
      url: `${baseurl_viewers}/view_listar_viewer`,
      method: "GET",
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function Addviewers(form) {
  try {
    const response = await axios({
      url: `${baseurl_viewers}/view_agregar_viewers`,
      method: "POST",
      data: form,
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function Updateviewers(form) {
  try {
    const response = await axios({
      url: `${baseurl_viewers}/view_modificar_viewers/${form.id_viewers}`,
      method: "PUT",
      data: form,
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function eliminarviewers(id_viewers) {
  console.log(id_viewers);

  try {
    const response = await axios({
      url: `${baseurl_viewers}/view_eliminar_viewers/${id_viewers}`,
      method: "DELETE",
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}


const baseurl_login = process.env.REACT_APP_BASE_URL_login;
export async function login(form) {
  try {
    const response = await axios({
      url: `${baseurl_login}/login`,
      method: "POST",
      data: form,
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}