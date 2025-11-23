import { laMateriaTopic } from "./la-materia";
import { laQuimicaTopic } from "./la-quimica";
import { laClasificacionDeLaMateriaTopic } from "./la-clasificacion-de-la-materia";
import { losMetodosDeSeparacionTopic } from "./los-metodos-de-separacion";
import { lasPropiedadesDeLaMateriaTopic } from "./las-propiedades-de-la-materia";
import { losEstadosDeAgregacionTopic } from "./los-estados-de-agragacion";
import { losCambiosDeLaMateriaTopic } from "./los-cambios-de-la-materia";
import { elAtomoTopic } from "./el-atomo";
import { losPrimerosModelosAtomicosTopic } from "./los-primeros-modelos-atomicos";
import { modelosRutherfordBohrTopic } from "./modelos-rutherford-bohr";
import { modeloAtomicoActualTopic } from "./modelo-atomico-actual";
import { losNumerosCuanticosTopic } from "./los-numeros-cuanticos";
import { laConfiguracionElectronicaTopic } from "./la-configuracion-electronica";
import { elNucleoAtomicoTopic } from "./el-nucleo-atomico";
import { losIsotoposTopic } from "./los-isotopos";
import { laRadiactividadTopic } from "./la-radiactividad";
import { aplicacionesIsotoposRadiactivosTopic } from "./aplicaciones-isotopos-radiactivos";
import { teoriaAtomicaYCuanticaTopic } from "./teoria-atomica-y-cuantica";
import type { TopicContent, TopicId } from "./types";

export const thirdYearTopics = [
  laMateriaTopic,
  laQuimicaTopic,
  laClasificacionDeLaMateriaTopic,
  lasPropiedadesDeLaMateriaTopic,
  losMetodosDeSeparacionTopic,
  losEstadosDeAgregacionTopic,
  losCambiosDeLaMateriaTopic,
  elAtomoTopic,
  losPrimerosModelosAtomicosTopic,
  modelosRutherfordBohrTopic,
  modeloAtomicoActualTopic,
  losNumerosCuanticosTopic,
  laConfiguracionElectronicaTopic,
  elNucleoAtomicoTopic,
  losIsotoposTopic,
  laRadiactividadTopic,
  aplicacionesIsotoposRadiactivosTopic,
  teoriaAtomicaYCuanticaTopic,
] as const satisfies readonly TopicContent[];

export type ThirdYearTopicId = TopicId<typeof thirdYearTopics>;

export const getThirdYearTopic = (id: string): TopicContent | undefined =>
  thirdYearTopics.find((topic) => topic.id === id);
