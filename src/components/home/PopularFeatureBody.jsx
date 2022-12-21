// Init
import * as React from 'react';
import DoneIcon from '@mui/icons-material/Done';
import { Link } from 'react-router-dom';

export default function PopularFeatureBody(props) {
  const { heading, desp, listHeading, point1, point2, point3, point4, point5, point6, image } =
    props;
  return (
    <div className="popularFeatureSubDiv">
      <div className="popularFeatureTextDiv">
        <p className="popularFeatureHeading">{heading}</p>
        <p className="popularFeatureDesp">{desp}</p>
        {listHeading && <p className="popularFeatureSubDesp">{listHeading}</p>}
        <div className="popularFeatureListDiv">
          {point1 && (
            <div style={{ display: 'flex' }}>
              <div>
                <DoneIcon sx={{ color: '#ff403e' }} />
              </div>
              <p className="popularFeatureList">{point1}</p>
            </div>
          )}
          {point2 && (
            <div style={{ display: 'flex' }}>
              <div>
                <DoneIcon sx={{ color: '#ff403e' }} />
              </div>
              <p className="popularFeatureList">{point2}</p>
            </div>
          )}
          {point3 && (
            <div style={{ display: 'flex' }}>
              <div>
                <DoneIcon sx={{ color: '#ff403e' }} />
              </div>
              <p className="popularFeatureList">{point3}</p>
            </div>
          )}
          {point4 && (
            <div style={{ display: 'flex' }}>
              <div>
                <DoneIcon sx={{ color: '#ff403e' }} />
              </div>
              <p className="popularFeatureList">{point4}</p>
            </div>
          )}
          {point5 && (
            <div style={{ display: 'flex' }}>
              <div>
                <DoneIcon sx={{ color: '#ff403e' }} />
              </div>
              <p className="popularFeatureList">{point5}</p>
            </div>
          )}
          {point6 && (
            <div style={{ display: 'flex' }}>
              <div>
                <DoneIcon sx={{ color: '#ff403e' }} />
              </div>
              <p className="popularFeatureList">{point6}</p>
            </div>
          )}
        </div>

        <div className="popularFeatureButton">Start Your Free Trial</div>

        <Link to="/features" className="popularFeatureFeatureBtn">
          See all features
        </Link>
      </div>
      <div className="popularFeatureImgDiv">
        <img src={image} alt="Unlimited sms" />
      </div>
    </div>
  );
}
