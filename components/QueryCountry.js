import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Error from "./ErrorMessage";
import styled from 'styled-components';


// const QUERY_COUNTRY = gql`
//   query QUERY_COUNTRY($id: ID!) {
//     countries(where: { iso3: $id }) {
//       iso3
//       name
//     }
//   }
// `;

class QueryCountry extends Component {
  render() {
    return (
      <h1>fake it to make it</h1>
      // <Query query={QUERY_COUNTRY}>
      //   {({ error, loading, data }) => {
      //     if (loading) return <div>Loading...</div>;
      //     if (error) return <Error />;
      //     if (!data) return <p>No data</p>;

      //     return (
      //       <div>
      //         <div>
      //           <h2>Choose country:</h2>
      //           <select>
      //             <option value="CA">Canada</option>
      //           </select>
      //         </div>

      //         <div>
      //           <h4>Confirmed cases: xxx</h4>
      //           <h4>Recovered: xxx</h4>
      //           <h4>Deaths: xxx</h4>
      //         </div>
      //       </div>
      //     );
      //   }}
      // </Query>
    );
  }
}

export default QueryCountry;
