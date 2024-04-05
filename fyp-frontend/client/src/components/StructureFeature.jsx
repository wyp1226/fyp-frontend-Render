import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import { getFieldLabel } from "../texts/convert";
const StructureFeature = ({ data, structure, substring }) => {
  return (
    <Accordion>
      <AccordionSummary>
        <Typography variant="h6">{structure} features</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              {Object.entries(data).map(([key, value], index) => {
                if (key.includes(`${substring}`)) {
                  return (
                    <TableRow key={index}>
                      <TableCell>{getFieldLabel(key)}</TableCell>
                      <TableCell>{value}</TableCell>
                    </TableRow>
                  );
                }
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
  );
};

export default StructureFeature;
