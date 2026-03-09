import { View } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import Cesta from './src/telas/Cesta';

import {
Montserrat_700Bold,
Montserrat_400Regular
} from '@expo-google-fonts/montserrat';



export default function App() {
const [fontCarregada] = useFonts({
"MontserratRegular": Montserrat_400Regular,
"MontserratBold": Montserrat_700Bold,
"Inter-Regular": Inter_400Regular,
"Inter-Bold": Inter_700Bold,
});


if (!fontCarregada) {
return<h1> Não carregou</h1>
}

return (
<SafeAreaView>
<Cesta />

</SafeAreaView>
);
}