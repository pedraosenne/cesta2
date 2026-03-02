import React from "react";
import { StyleSheet } from "react-native";


export default function Texto({children,style}){
   let estilo = estilo.Texto;


   if(style.fontWeight === 'bold'){
   }
   return <text style={[style,estilo]}>{children}</text>
}


const estilos = StyleSheet.create({
   texto:{
       fontFamily: 'montserratRegular',
       fontWeight:'normal',
   },
   textoNegrito:{
       fontFamily:'montserrarBold',
       fontWeight:'normal',
   }
})

