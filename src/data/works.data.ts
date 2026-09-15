export const WORKS_TITLE = "Diseño de Historias";

export const phoneFrame =
  "https://cdn.pixabay.com/photo/2021/03/03/09/13/phone-6064855_1280.png";

export interface WorkItem {
  url: string;
  type?: "video";
}

export const workList: WorkItem[] = [
  { url: "/works/camara_cctv_ekimak.jpg" },
  { url: "/works/Historia_amaru_condominio.mp4", type: "video" },
  { url: "/works/Ekiamk_historia.jpg" },
  { url: "/works/Historia_KAUA.mp4", type: "video" },
  { url: "/works/Expresarte_Fundacion_dame_esos_5.jpg" },
  { url: "/works/Historias_EKIMAK.mp4", type: "video" },
  { url: "/works/Fuencanto_baru.jpg" },
  { url: "/works/historia_servicio_ekimak.jpg" },
  { url: "/works/panderitos_guerreras_yurbaco.jpg" },
  { url: "/works/servicios_ekimak.jpg" },
  { url: "/works/torta_de_zanahoria.jpg" },
];
