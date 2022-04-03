import * as React from 'react';
import {
  Button,
  Grid,
  Stack,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';

import { ChevronDownIcon } from '@heroicons/react/solid';

import {
  AcademicCapIcon,
  CubeIcon,
  CodeIcon,
  PresentationChartLineIcon,
  CalculatorIcon,
} from '@heroicons/react/outline';

import { mainColors, colors } from '../../../Theme';
import { Skillset } from '../../Skillset/Skillset';

export const Experience = (props) => {
  return (
    <Stack spacing={0} alignItems="flex-start">
      <Grid
        container
        direction="row"
        alignItems={'flex-start'}
        rowGap={{ xs: 2, md: 0 }}
      >
        <Grid item xs={12}>
          <Stack px={8}>
            <Typography
              variant="sectionHeader"
              style={{ color: mainColors.light }}
            >
              {props.page.experienceType}
            </Typography>
          </Stack>
        </Grid>
        {props.page.data.map((education) => (
          <Grid item xs={12} md={8} lg={12}>
            <Stack spacing={2} px={8}>
              <Stack spacing={1}>
                <Stack>
                  <Typography
                    variant="sectionHeader"
                    style={{ color: mainColors.light }}
                  >
                    {education.college}
                  </Typography>
                  <Typography variant="sectionSubtitle">
                    {education.school}
                  </Typography>
                </Stack>

                <Stack direction={'row'} spacing={2}>
                  <Typography
                    variant="sectionSubtitle"
                    style={{ color: 'gray', fontWeight: '400' }}
                  >
                    {education.graduation}
                  </Typography>
                  {education.gpa !== undefined ? (
                    <Typography
                      variant="sectionSubtitle"
                      style={{ fontWeight: '400' }}
                    >
                      {education.gpa}
                    </Typography>
                  ) : null}
                </Stack>
                {props.page.experienceType === 'Academics' ? (
                  <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    alignItems={{ xs: 'flex-start' }}
                    flexWrap={'wrap'}
                    rowGap={2}
                  >
                    <Box
                      px={1.5}
                      py={0.75}
                      bgcolor={education.tint}
                      sx={{ borderRadius: '5px', marginRight: 2 }}
                    >
                      <Stack
                        direction={'row'}
                        alignItems={'center'}
                        spacing={1}
                      >
                        <AcademicCapIcon height={18} width={18} />
                        <Typography
                          variant="skillset"
                          textTransform={'uppercase'}
                          style={{ fontWeight: '800' }}
                        >
                          {education.degree}
                        </Typography>
                      </Stack>
                    </Box>
                    <Box
                      px={1.5}
                      py={0.75}
                      bgcolor={education.tint}
                      sx={{ borderRadius: '5px', marginRight: 2 }}
                    >
                      <Stack
                        direction={'row'}
                        alignItems={'center'}
                        spacing={1}
                      >
                        {education.specialization === 'Computer Science' ? (
                          <CodeIcon height={18} width={18} />
                        ) : (
                          <PresentationChartLineIcon height={18} width={18} />
                        )}
                        <Typography
                          variant="skillset"
                          textTransform={'uppercase'}
                          style={{ fontWeight: '800' }}
                        >
                          {education.specialization}
                        </Typography>
                      </Stack>
                    </Box>
                    {education.minors !== undefined
                      ? education.minors.map((minor, index) => (
                          <Box
                            px={1.5}
                            py={0.75}
                            bgcolor={education.tint}
                            sx={{ borderRadius: '5px', marginRight: 2 }}
                          >
                            <Stack
                              direction={'row'}
                              alignItems={'center'}
                              spacing={1}
                            >
                              {minor === 'Physics' ? (
                                <CubeIcon height={18} width={18} />
                              ) : (
                                <CalculatorIcon height={18} width={18} />
                              )}
                              <Typography
                                variant="skillset"
                                textTransform={'uppercase'}
                                style={{ fontWeight: '800' }}
                              >
                                {minor}
                              </Typography>
                            </Stack>
                          </Box>
                        ))
                      : null}
                  </Stack>
                ) : (
                  <Stack>
                    <Stack
                      direction="row"
                      justifyContent={'flex-start'}
                      rowGap={2}
                      sx={{ flexWrap: 'wrap' }}
                    >
                      {education.skills.map((skill, index) => (
                        <Skillset title={skill} color={colors[index]} />
                      ))}
                    </Stack>
                  </Stack>
                )}

                <Divider color={'#414141'} style={{ width: '100%' }} />
              </Stack>
              <Accordion style={{ borderRadius: '10px' }}>
                <AccordionSummary
                  expandIcon={
                    <ChevronDownIcon
                      color="white"
                      style={{ height: '30px', width: '30px' }}
                    />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  style={{ backgroundColor: '#111111' }}
                >
                  <Typography variant="accordion" style={{ fontWeight: '600' }}>
                    {props.page.experienceType === 'Academics'
                      ? `Coursework`
                      : `Responsibilities`}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails style={{ backgroundColor: '#111111' }}>
                  <List spacing={0}>
                    {education.coursework.map((course) => (
                      <ListItem>
                        <Typography variant="accordion">• {course}</Typography>
                      </ListItem>
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};
