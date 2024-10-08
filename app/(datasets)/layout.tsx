import DataProvider from "app/store/providers/data";
import { getDatasetsMetadata } from 'app/blog/utils/mdx';

export default function DatasetLayout(props) {
  const datasets = getDatasetsMetadata();
  
  return(
    <DataProvider initialDatasets={datasets}>
      {props.children}
    </DataProvider>
  ) 
}