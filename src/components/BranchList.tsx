import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner
} from '@chakra-ui/react';
import useBranches from '../hooks/useBranches';
import getCroppedImageUrl from '../services/image-url';
import useCustomerQueryStore from '../store';

const BranchList = () => {
  const { data, isLoading, error } = useBranches();
  const selectedBranchId = useCustomerQueryStore(s => s.customerQuery.branchId);
  const setSelectedBranchId = useCustomerQueryStore(s => s.setBranchId);

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginTop={9} marginBottom={3}>
        Branches
      </Heading>
      <List>
        {data?.results.map((branch) => (
          <ListItem key={branch.Mbri_Id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(branch.image_branch)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={
                  branch.Mbri_Id === selectedBranchId
                    ? 'bold'
                    : 'normal'
                }
                onClick={() => setSelectedBranchId(branch.Mbri_Id)}
                fontSize="md"
                variant="link"
              >
                {branch.Mbri_Name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default BranchList;
