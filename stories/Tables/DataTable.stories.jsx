import { useRef, useState } from "react";
import {
  MainTableContainer,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableFooter,
  NoDataTable,
} from "component-book";
import { tableColumns, tableRowsData } from "../_shared/fixtures.jsx";

export default {
  title: "Tables/DataTable",
  parameters: { layout: "fullscreen", controls: { disable: true } },
  tags: ["autodocs"],
};

/** A full table: container → header → body rows → footer pagination. */
export const DataTable = {
  render: () => {
    const perPageRef = useRef(null);
    const [perPageOpen, setPerPageOpen] = useState(false);
    return (
      <div className="p-4">
        <MainTableContainer>
          <Table>
            <TableHeader columns={tableColumns} />
            <TableBody>
              {tableRowsData.map((row) => (
                <TableRow
                  key={row.name}
                  columns={[
                    { text: row.name, textMono: true },
                    { text: row.status },
                    { text: row.region },
                    { text: row.created },
                  ]}
                />
              ))}
            </TableBody>
          </Table>
          <TableFooter
            isLoading={false}
            response={{ pageInfo: { total: 3, perPage: 10 } }}
            state={{ page: 1 }}
            perPageRef={perPageRef}
            perPageDropdownOpen={perPageOpen}
            setPerPageDropdownOpen={setPerPageOpen}
            dispatch={() => {}}
            actions={{ pageChange: "PAGE_CHANGE", perPageChange: "PER_PAGE_CHANGE" }}
          />
        </MainTableContainer>
      </div>
    );
  },
};

/** Empty state rendered inside the table shell. */
export const Empty = {
  render: () => (
    <div className="p-4">
      <MainTableContainer isFooter={false}>
        <Table isFooter={false}>
          <TableHeader columns={tableColumns} />
          <TableBody>
            <NoDataTable columns={tableColumns} message="No deployments yet" />
          </TableBody>
        </Table>
      </MainTableContainer>
    </div>
  ),
};
