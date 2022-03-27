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

import {
  LibraryIcon,
  PresentationChartLineIcon,
  TerminalIcon,
  ChevronDownIcon,
} from '@heroicons/react/solid';
import { colors } from '../../../Theme';
import { Skillset } from '../../Skillset/Skillset';

export const Experience = (props) => {
  return (
    <Stack spacing={0} alignItems="flex-start">
      <Grid
        container
        direction="row"
        alignItems={'flex-start'}
        justifyContent="center"
        rowGap={{ xs: 5, md: 0 }}
      >
        <Grid item xs={12}>
          <Stack px={5}>
            <Typography variant="sectionHeader" className={'header'}>
              {props.page.experienceType}
            </Typography>
          </Stack>
        </Grid>
        {props.page.data.map((education) => (
          <Grid item xs={12} md={8} lg={4}>
            <Stack spacing={2} px={5}>
              <Stack spacing={1}>
                <Stack>
                  <Typography variant="sectionHeader">
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
                    spacing={2}
                    alignItems={{ xs: 'flex-start' }}
                  >
                    <Box
                      px={1.5}
                      py={0.75}
                      bgcolor={education.tint}
                      sx={{ borderRadius: '5px' }}
                    >
                      <Stack
                        direction={'row'}
                        alignItems={'center'}
                        spacing={1}
                      >
                        <LibraryIcon height={18} width={18} />
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
                      sx={{ borderRadius: '5px' }}
                    >
                      <Stack
                        direction={'row'}
                        alignItems={'center'}
                        spacing={1}
                      >
                        {education.specialization === 'Computer Science' ? (
                          <TerminalIcon height={18} width={18} />
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
                            sx={{ borderRadius: '5px' }}
                          >
                            <Stack
                              direction={'row'}
                              alignItems={'center'}
                              spacing={1}
                            >
                              {minor === 'Physics' ? (
                                <TerminalIcon height={18} width={18} />
                              ) : (
                                <PresentationChartLineIcon
                                  height={18}
                                  width={18}
                                />
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
