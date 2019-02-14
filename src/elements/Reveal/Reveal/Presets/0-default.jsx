/* eslint-disable react/jsx-filename-extension */
import * as React from 'react'
import Image from '../../../Image'
import Reveal from '../Reveal'
import RevealContent from '../../RevealContent/RevealContent'

export default (
  <Reveal animated='fade' uxpId='0'>
    <RevealContent visible uxpId='1'>
      <Image
        src='https://react.semantic-ui.com/images/wireframe/square-image.png'
        size='small'
        uxpId='2'
      />
    </RevealContent>

    <RevealContent hidden uxpId='3'>
      <Image
        src='https://react.semantic-ui.com/images/avatar/large/ade.jpg'
        size='small'
        uxpId='4'
      />
    </RevealContent>
  </Reveal>
)
