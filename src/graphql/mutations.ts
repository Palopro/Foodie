import { gql } from '@apollo/client';

const uploadImageMutation = gql`
  mutation UploadImage(
    $refId: ID!
    $ref: String!
    $field: String!
    $info: FileInfoInput!
    $file: Upload!
  ) {
    upload(refId: $refId, ref: $ref, field: $field, info: $info, file: $file) {
      data {
        id
        attributes {
          name
          alternativeText
          caption
          width
          height
          formats
          hash
          mime
          ext
          size
          url
          previewUrl
          provider
          provider_metadata
          createdAt
          updatedAt
        }
      }
    }
  }
`;

export { uploadImageMutation };
