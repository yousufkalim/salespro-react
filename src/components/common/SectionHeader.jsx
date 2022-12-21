// Init
import * as React from 'react';

export default function SectionHeader(props) {
  const { subTitle, title, desp } = props;
  return (
    <div className="sectionHeaderDiv">
      <p className="sectionHeaderTitle">{title}</p>
      <p className="sectionHeaderSubTitle">{subTitle}</p>
      {desp && <p className="sectionHeaderDesp">{desp}</p>}
    </div>
  );
}
