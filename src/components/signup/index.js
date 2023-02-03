import { Formik } from 'formik';
import * as yup from 'yup';
import { Box, Button, Card, CardBody, Checkbox, CheckboxGroup, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input, NumberInput, NumberInputField, PinInput, PinInputField, Radio, RadioGroup, Select, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Stack, Textarea } from "@chakra-ui/react";

const schema = yup.object().shape({
    firstName: yup.string().matches(/[a-zA-z]/, 'FirstName must contain only letters').required('FirstName is a required field'),
    lastName: yup.string().matches(/[a-zA-z]/, 'LastName must contain only letters').required('LastName is a required field'),
    gender: yup.string().required('Gender is a required field'),
    like: yup.array().min(1, 'Select atleast one of likes').required('This is a required field'),
    mobile: yup.string().min(10, 'Mobile number must be of 10 to 12 characters').max(12, 'Mobile number must be of 10 to 12 characters').required('Mobile No. is a required field'),
    old: yup.number().min(18, 'Age must be above 18 years').required(),
    dob: yup.string().required('Birthdate is a required field'),
    country: yup.string().required('Country is a required field')
});

const Signup = () => {
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                gender: '1',
                like: ['1'],
                mobile: undefined,
                old: 18,
                dob: '',
                country: '',
                pin: '',
                address: ''
            }}
            validationSchema={schema}
            onSubmit={(values, { resetForm }) => {
                // handle form submit
            }}
        >
            {({ values, setFieldValue, handleChange, handleBlur, handleSubmit, errors, touched }) =>
            <form onSubmit={handleSubmit}>
                <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                    <Card w='30%' mt='30px' mb='30px'>
                        <CardBody>
                            <Heading class='text-2xl font-semibold text-center' as='h1' size='lg'>Sign Up</Heading>
                            <Flex direction='column' class='w-1/4'>
                                <FormControl mt="20px" isRequired isInvalid={errors.firstName && touched.firstName}>
                                    <FormLabel>First name</FormLabel>
                                    <Input id='firstName' name='firstName' placeholder="Enter first name" value={values.firstName} onChange={handleChange} onBlur={handleBlur} />
                                    <FormErrorMessage>{errors.firstName}</FormErrorMessage>
                                </FormControl>
                                <FormControl mt="20px" isRequired isInvalid={errors.lastName && touched.lastName}>
                                    <FormLabel>Last name</FormLabel>
                                    <Input id='lastName' name='lastName' placeholder="Enter last name" value={values.lastName} onChange={handleChange} onBlur={handleBlur} />
                                    <FormErrorMessage>{errors.lastName}</FormErrorMessage>
                                </FormControl>
                                <FormControl mt="20px" isRequired isInvalid={errors.gender && touched.gender}>
                                    <FormLabel>Gender</FormLabel>
                                    <RadioGroup id='gendert' name='gender' value={values.gender} onChange={handleChange} onBlur={handleBlur}>
                                        <Stack direction='row'>
                                            <Radio value='1'>Male</Radio>
                                            <Radio value='2'>Female</Radio>
                                            <Radio value='3'>other</Radio>
                                        </Stack>
                                    </RadioGroup>
                                    <FormErrorMessage>{errors.gender}</FormErrorMessage>
                                </FormControl>
                                <FormControl mt="20px" isRequired isInvalid={errors.like && touched.like}>
                                    <FormLabel>What do you like ?</FormLabel>
                                    <CheckboxGroup id='like' name='like' value={values.like} onChange={(e) => setFieldValue('like', e)} onBlur={handleBlur}>
                                        <Stack spacing={[1, 5]} direction={['column', 'row']}>
                                            <Checkbox value='1'>Movies</Checkbox>
                                            <Checkbox value='2'>Games</Checkbox>
                                            <Checkbox value='3'>Music</Checkbox>
                                        </Stack>
                                    </CheckboxGroup>
                                    <FormErrorMessage>{errors.like}</FormErrorMessage>
                                </FormControl>
                                <FormControl mt="20px" isRequired isInvalid={errors.mobile && touched.mobile}>
                                    <FormLabel>Mobile No.</FormLabel>
                                    <NumberInput>
                                        <NumberInputField id='mobile' name='mobile' value={values.mobile} onChange={handleChange} onBlur={handleBlur} />
                                    </NumberInput>
                                    <FormErrorMessage>{errors.mobile}</FormErrorMessage>
                                </FormControl>
                                <FormControl mt="20px" isRequired isInvalid={errors.old && (touched?.['slider-track-old'] || touched?.['slider-thumb-old'])}>
                                    <FormLabel>How old are you ?</FormLabel>
                                    <Slider id='old' name='old' mt="30px" aria-label="slider-ex-1" value={values.old} onChange={(e) => setFieldValue('old', e)} onBlur={handleBlur}>
                                        <SliderMark
                                            value={values.old}
                                            textAlign='center'
                                            bg='blue.500'
                                            color='white'
                                            mt='-10'
                                            ml='-5'
                                            w='12'
                                        >
                                            {values.old}
                                        </SliderMark>
                                        <SliderTrack>
                                            <SliderFilledTrack />
                                        </SliderTrack>
                                        <SliderThumb />
                                    </Slider>
                                    <FormErrorMessage>{errors.old}</FormErrorMessage>
                                </FormControl>
                                <FormControl mt="20px" isRequired isInvalid={errors.dob && touched.dob}>
                                    <FormLabel>Birthdate</FormLabel>
                                    <Input id='dob' name='dob' placeholder="Select you birthdate" type='date' value={values.dob} onChange={handleChange} onBlur={handleBlur} />
                                    <FormErrorMessage>{errors.dob}</FormErrorMessage>
                                </FormControl>
                                <FormControl mt="20px" isRequired isInvalid={errors.country && touched.country}>
                                    <FormLabel>Which country you live ?</FormLabel>
                                    <Select id='country' name='country' placeholder="Select county" value={values.country} onChange={handleChange} onBlur={handleBlur}>
                                        <option value='india'>India</option>
                                        <option value='usa'>USA</option>
                                        <option value='UK'>UK</option>
                                        <option value='france'>France</option>
                                    </Select>
                                    <FormErrorMessage>{errors.country}</FormErrorMessage>
                                </FormControl>
                                <FormControl mt="20px">
                                    <FormLabel>Pincode</FormLabel>
                                    <PinInput>
                                        <PinInputField />
                                        <PinInputField />
                                        <PinInputField />
                                        <PinInputField />
                                    </PinInput>
                                    <FormErrorMessage></FormErrorMessage>
                                </FormControl>
                                <FormControl mt="20px">
                                    <FormLabel>Address</FormLabel>
                                    <Textarea />
                                    <FormErrorMessage></FormErrorMessage>
                                </FormControl>
                                <Flex justify='flex-start' mt="20px">
                                    <Button type='submit' class="w-52 h-10 bg-gray-200 rounded-full hover:bg-blue-500 hover:text-white hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:text-white focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-lg transition duration-150 ease-in-out">Signup</Button>
                                </Flex>
                            </Flex>
                        </CardBody>
                    </Card>
                </Box>
            </form>}
        </Formik>
    )
}

export default Signup;