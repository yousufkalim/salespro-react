/* eslint-disable react-hooks/exhaustive-deps */
import { React } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ReactComponent as GreenTick } from '../../assets/greenTick.svg';

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    fontFamily: 'DM Sans',
    fontWeight: 500,
    fontSize: 24,
  },
}));

export default function PricingTable() {
  const tableData = [
    {
      name: 'Unlimited SMS',
      icon: GreenTick,
      icon2: GreenTick,
    },

    {
      name: 'Auto-Dialing System',
      icon: GreenTick,
      icon2: GreenTick,
    },
    {
      name: 'Unlimited Emails',
      icon: GreenTick,
      icon2: GreenTick,
    },
    {
      name: 'Unlimited Ringless Voicemails',
      icon: GreenTick,
      icon2: GreenTick,
    },
    {
      name: 'Mobile App and Desk Phone',
      icon: GreenTick,
      icon2: GreenTick,
    },
    {
      name: 'Call Tracking and Recording',
      icon: GreenTick,
      icon2: GreenTick,
    },
    {
      name: 'Pipeline and Opportunity CRM',
      icon: GreenTick,
      icon2: GreenTick,
    },
    {
      name: 'Accept and Process Payments',
      icon: GreenTick,
      icon2: GreenTick,
    },
    {
      name: 'Calendar and Appointment Manager',
      icon: GreenTick,
      icon2: 'GreenTick',
    },
    {
      name: 'Membership and Training Creation',
      icon: GreenTick,
      icon2: 'GreenTick',
    },
    {
      name: 'Workflows and Automation',
      icon: GreenTick,
      icon2: 'GreenTick',
    },
  ];
  return (
    <div className="table">
      <TableContainer
        component={Paper}
        style={{
          borderRadius: '60px',
          maxHeight: '100%',
          overflowX: 'hidden',
          width: '1215px',
          padding: '2% 4%',
          margin: 'auto',
          boxShadow: '0 3px 40px #E3E3E3',
          '@media (max-width: 1000px)': {
            width: '780px',
            background: 'yellow',
          },
        }}
      >
        <div className="tableHead">
          <div className="tableHead1">
            <p className="t-head"> Price Plan </p>
          </div>
          <div className="tableHead2">
            <div className="cardPriceDiv">
              <span>Monthly </span> <br /> $49{' '}
            </div>
            <div className="cardPriceDiv">
              <span>Enterprise </span>
              <br /> $199{' '}
            </div>
          </div>
        </div>
        <Table
          sx={{
            minWidth: 700,
            [`& .${tableCellClasses.root}`]: {
              borderBottom: '1px solid #C8CDCD',
            },
          }}
          aria-label="customized table"
        >
          <TableBody>
            {tableData.map((row) => (
              <TableRow key={row.name}>
                <StyledTableCell align="left" className="safariMarginClass" sx={{ width: '50%' }}>
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center" sx={{ width: '25%' }}>
                  <row.icon2 />
                </StyledTableCell>
                <StyledTableCell align="center" sx={{ width: '30%' }}>
                  <row.icon />
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
