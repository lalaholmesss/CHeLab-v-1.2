import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import chemicals from '../../data/chemicals';
import DisplayInfo from './DisplayInfo';

export default function Students() {
    return(
        <div>
          <DisplayInfo />
        </div>
    )
}