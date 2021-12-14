import styled, {  } from "styled-components";
import { device, size } from '../../styles/device';
import { ContentBase, TitleContainerBase, ContainerBase } from "../../styles/base"



export const Container = styled(ContainerBase) `
 
   
`;


export const TitleContainer = styled(TitleContainerBase) `
 
   
`;


export const Content = styled(ContentBase) `
    padding: 0 30%;
    display:flex;
    @media (max-width: ${size.tablet}) {
        padding: 0 15% 0 15%;
    }
`;


