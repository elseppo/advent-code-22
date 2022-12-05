import { Test, TestingModule } from '@nestjs/testing';
import { Day4Service } from './day-4.service';

describe('Day4Service', () => {
  let service: Day4Service;

  const puzzleOneTestInput =
      '2-8,3-7\n' +
      '2-4,6-8\n' +
      '2-3,4-5\n' +
      '5-7,7-9\n' +
      '6-6,4-6\n' +
      '2-6,4-8';

  const puzzleOneInput = '5-90,4-90\n' +
      '52-52,3-51\n' +
      '46-81,45-80\n' +
      '15-48,49-75\n' +
      '14-81,14-81\n' +
      '23-44,23-37\n' +
      '60-60,48-61\n' +
      '10-58,58-75\n' +
      '12-86,4-77\n' +
      '8-80,7-89\n' +
      '82-92,91-95\n' +
      '67-67,35-67\n' +
      '92-92,65-91\n' +
      '21-96,20-95\n' +
      '29-30,30-81\n' +
      '15-97,6-97\n' +
      '52-96,51-98\n' +
      '16-74,16-74\n' +
      '7-14,15-58\n' +
      '10-10,24-25\n' +
      '63-93,58-93\n' +
      '1-99,2-4\n' +
      '17-17,17-96\n' +
      '46-69,45-88\n' +
      '10-90,17-66\n' +
      '41-99,41-45\n' +
      '9-55,8-56\n' +
      '14-54,54-54\n' +
      '2-16,1-99\n' +
      '10-99,9-97\n' +
      '75-97,96-97\n' +
      '9-79,19-80\n' +
      '1-1,3-41\n' +
      '5-54,4-53\n' +
      '90-96,59-70\n' +
      '21-88,89-97\n' +
      '4-99,3-98\n' +
      '98-99,1-98\n' +
      '3-48,7-47\n' +
      '5-90,6-89\n' +
      '45-94,1-93\n' +
      '11-51,12-36\n' +
      '5-95,1-5\n' +
      '83-83,56-84\n' +
      '5-82,4-4\n' +
      '6-79,7-92\n' +
      '70-92,70-92\n' +
      '32-59,32-32\n' +
      '55-80,54-66\n' +
      '6-53,55-91\n' +
      '1-76,1-77\n' +
      '55-80,30-54\n' +
      '36-38,18-37\n' +
      '9-38,39-39\n' +
      '12-23,24-88\n' +
      '28-95,23-25\n' +
      '36-43,35-65\n' +
      '46-53,17-47\n' +
      '6-9,10-87\n' +
      '62-62,57-62\n' +
      '74-79,75-81\n' +
      '14-15,14-85\n' +
      '15-65,9-66\n' +
      '18-99,17-20\n' +
      '36-93,83-94\n' +
      '15-41,14-18\n' +
      '74-91,73-91\n' +
      '61-96,69-96\n' +
      '74-78,73-76\n' +
      '1-89,1-90\n' +
      '78-91,90-90\n' +
      '2-45,11-45\n' +
      '51-82,76-78\n' +
      '44-89,45-85\n' +
      '66-92,67-93\n' +
      '3-88,1-2\n' +
      '23-86,22-68\n' +
      '1-39,2-39\n' +
      '4-62,63-63\n' +
      '43-71,44-82\n' +
      '48-99,48-97\n' +
      '98-99,35-89\n' +
      '83-87,43-83\n' +
      '9-25,9-9\n' +
      '6-8,7-9\n' +
      '89-97,32-78\n' +
      '18-59,19-75\n' +
      '49-59,49-53\n' +
      '2-2,1-99\n' +
      '88-93,59-92\n' +
      '1-2,1-98\n' +
      '53-54,11-54\n' +
      '19-58,6-57\n' +
      '66-85,65-65\n' +
      '48-77,16-39\n' +
      '22-89,23-99\n' +
      '1-69,37-69\n' +
      '10-73,74-74\n' +
      '16-22,16-23\n' +
      '31-79,30-74\n' +
      '73-79,5-74\n' +
      '10-68,11-95\n' +
      '45-71,23-45\n' +
      '12-12,13-69\n' +
      '79-88,58-87\n' +
      '88-97,87-96\n' +
      '25-28,29-93\n' +
      '11-88,87-89\n' +
      '51-80,52-79\n' +
      '37-38,11-38\n' +
      '85-88,28-87\n' +
      '29-76,28-98\n' +
      '90-93,9-89\n' +
      '9-81,8-81\n' +
      '21-94,66-94\n' +
      '55-56,49-56\n' +
      '25-67,16-25\n' +
      '23-48,49-49\n' +
      '16-54,24-54\n' +
      '33-75,33-33\n' +
      '44-88,71-89\n' +
      '98-98,3-98\n' +
      '32-32,33-34\n' +
      '24-98,24-25\n' +
      '7-19,5-8\n' +
      '52-54,52-53\n' +
      '53-58,54-96\n' +
      '24-97,25-98\n' +
      '5-44,45-47\n' +
      '9-13,14-42\n' +
      '39-39,39-74\n' +
      '61-97,60-90\n' +
      '82-83,83-98\n' +
      '15-44,1-16\n' +
      '65-67,64-83\n' +
      '67-87,66-68\n' +
      '16-71,71-80\n' +
      '41-56,56-57\n' +
      '44-65,44-67\n' +
      '66-81,19-65\n' +
      '6-93,92-93\n' +
      '7-91,5-92\n' +
      '29-82,29-92\n' +
      '70-71,71-77\n' +
      '20-90,26-89\n' +
      '14-56,15-81\n' +
      '19-54,18-20\n' +
      '5-25,5-6\n' +
      '10-54,9-95\n' +
      '11-94,8-10\n' +
      '4-91,4-5\n' +
      '14-92,92-92\n' +
      '8-88,89-89\n' +
      '22-77,22-38\n' +
      '5-95,6-97\n' +
      '42-89,43-90\n' +
      '7-39,6-38\n' +
      '45-55,6-46\n' +
      '11-68,12-68\n' +
      '37-54,42-53\n' +
      '21-42,21-35\n' +
      '80-97,34-79\n' +
      '23-94,93-95\n' +
      '74-89,53-74\n' +
      '24-85,24-84\n' +
      '2-97,2-2\n' +
      '10-12,13-31\n' +
      '29-38,30-39\n' +
      '96-96,86-97\n' +
      '31-94,30-50\n' +
      '94-99,16-95\n' +
      '4-92,91-93\n' +
      '6-6,7-93\n' +
      '2-93,1-93\n' +
      '28-56,29-55\n' +
      '23-40,23-58\n' +
      '68-68,24-69\n' +
      '79-93,40-83\n' +
      '30-97,29-98\n' +
      '43-56,42-57\n' +
      '5-91,5-87\n' +
      '80-80,54-79\n' +
      '16-63,15-63\n' +
      '1-1,2-95\n' +
      '73-77,72-75\n' +
      '4-99,3-95\n' +
      '7-98,7-97\n' +
      '29-72,72-99\n' +
      '83-88,56-62\n' +
      '42-42,41-61\n' +
      '10-97,6-98\n' +
      '9-96,10-97\n' +
      '8-93,8-92\n' +
      '57-59,36-58\n' +
      '47-96,61-88\n' +
      '13-97,23-75\n' +
      '16-17,34-53\n' +
      '2-99,2-98\n' +
      '50-89,35-68\n' +
      '7-19,6-62\n' +
      '64-64,62-69\n' +
      '40-40,3-40\n' +
      '23-73,22-74\n' +
      '1-26,25-90\n' +
      '96-99,36-94\n' +
      '14-21,15-77\n' +
      '57-72,53-57\n' +
      '11-12,14-32\n' +
      '36-39,27-38\n' +
      '22-22,21-96\n' +
      '43-85,43-84\n' +
      '7-75,12-75\n' +
      '76-76,77-77\n' +
      '1-1,2-99\n' +
      '8-19,7-21\n' +
      '4-14,8-15\n' +
      '15-89,13-89\n' +
      '26-26,25-51\n' +
      '48-98,97-99\n' +
      '3-93,4-47\n' +
      '17-88,99-99\n' +
      '98-99,41-97\n' +
      '30-87,41-87\n' +
      '25-41,29-42\n' +
      '14-16,16-66\n' +
      '38-85,86-88\n' +
      '2-2,3-71\n' +
      '4-23,22-94\n' +
      '27-60,32-46\n' +
      '14-15,14-81\n' +
      '42-64,47-65\n' +
      '32-32,31-92\n' +
      '1-98,2-97\n' +
      '4-5,12-59\n' +
      '7-76,6-76\n' +
      '94-95,35-95\n' +
      '4-94,94-95\n' +
      '25-72,24-35\n' +
      '56-77,52-56\n' +
      '49-82,42-48\n' +
      '47-76,1-61\n' +
      '41-50,50-50\n' +
      '24-70,18-69\n' +
      '53-66,25-91\n' +
      '97-99,46-92\n' +
      '6-97,14-88\n' +
      '17-88,1-89\n' +
      '43-43,42-89\n' +
      '14-85,84-90\n' +
      '24-69,69-70\n' +
      '47-75,15-76\n' +
      '23-76,76-77\n' +
      '81-97,81-81\n' +
      '22-64,23-82\n' +
      '33-34,12-34\n' +
      '7-7,8-17\n' +
      '63-63,58-63\n' +
      '66-94,93-95\n' +
      '54-73,21-72\n' +
      '10-41,11-95\n' +
      '60-60,16-59\n' +
      '13-95,94-94\n' +
      '1-33,2-96\n' +
      '28-29,28-30\n' +
      '2-66,3-3\n' +
      '25-28,25-52\n' +
      '65-79,75-79\n' +
      '12-28,27-91\n' +
      '4-96,95-96\n' +
      '35-72,34-71\n' +
      '16-18,17-79\n' +
      '3-97,99-99\n' +
      '13-22,13-14\n' +
      '8-55,4-55\n' +
      '30-96,61-67\n' +
      '53-53,54-96\n' +
      '10-11,11-86\n' +
      '81-97,80-97\n' +
      '6-8,9-97\n' +
      '41-54,11-54\n' +
      '15-71,15-15\n' +
      '69-97,90-96\n' +
      '1-99,2-2\n' +
      '3-97,2-98\n' +
      '14-82,21-82\n' +
      '1-95,1-94\n' +
      '11-11,10-72\n' +
      '93-99,31-94\n' +
      '8-11,5-10\n' +
      '4-33,3-34\n' +
      '9-89,94-94\n' +
      '2-19,18-43\n' +
      '95-96,70-72\n' +
      '61-84,60-85\n' +
      '95-97,17-96\n' +
      '33-70,32-71\n' +
      '36-36,37-50\n' +
      '6-85,6-6\n' +
      '22-49,22-75\n' +
      '5-93,5-6\n' +
      '86-86,8-86\n' +
      '91-94,90-92\n' +
      '26-56,56-56\n' +
      '13-30,12-95\n' +
      '11-55,12-43\n' +
      '21-78,20-79\n' +
      '69-94,69-93\n' +
      '85-87,10-45\n' +
      '33-84,80-82\n' +
      '16-78,16-92\n' +
      '25-64,39-65\n' +
      '33-33,34-78\n' +
      '9-57,9-9\n' +
      '94-94,66-95\n' +
      '10-48,7-48\n' +
      '57-88,63-87\n' +
      '4-56,2-2\n' +
      '23-94,22-64\n' +
      '45-66,46-67\n' +
      '44-94,43-95\n' +
      '29-66,66-66\n' +
      '30-75,74-74\n' +
      '93-97,41-94\n' +
      '3-38,2-12\n' +
      '2-48,49-49\n' +
      '20-94,19-98\n' +
      '22-55,7-55\n' +
      '1-58,2-88\n' +
      '76-81,77-80\n' +
      '2-37,37-68\n' +
      '22-44,23-61\n' +
      '21-91,90-91\n' +
      '98-98,2-97\n' +
      '7-93,8-95\n' +
      '23-98,12-24\n' +
      '56-56,56-96\n' +
      '52-77,37-78\n' +
      '91-93,3-92\n' +
      '57-96,56-95\n' +
      '96-99,1-97\n' +
      '44-57,45-85\n' +
      '8-84,5-6\n' +
      '2-95,94-98\n' +
      '91-95,91-99\n' +
      '5-94,4-4\n' +
      '26-87,86-86\n' +
      '42-80,79-81\n' +
      '21-33,32-40\n' +
      '29-69,29-69\n' +
      '79-79,79-97\n' +
      '23-91,28-95\n' +
      '11-36,1-35\n' +
      '4-29,5-91\n' +
      '7-14,16-95\n' +
      '46-85,26-89\n' +
      '29-95,11-18\n' +
      '4-94,2-95\n' +
      '3-18,18-18\n' +
      '16-35,3-15\n' +
      '3-39,2-39\n' +
      '22-34,23-33\n' +
      '26-99,98-99\n' +
      '10-85,84-85\n' +
      '42-42,40-42\n' +
      '1-1,1-35\n' +
      '6-97,7-99\n' +
      '4-23,3-8\n' +
      '62-63,63-82\n' +
      '1-80,2-81\n' +
      '1-19,1-27\n' +
      '13-91,14-91\n' +
      '33-78,34-79\n' +
      '7-95,8-8\n' +
      '7-82,75-83\n' +
      '26-94,11-27\n' +
      '21-23,21-96\n' +
      '19-24,20-66\n' +
      '26-99,25-80\n' +
      '38-79,39-80\n' +
      '39-95,94-95\n' +
      '25-26,9-26\n' +
      '92-98,74-93\n' +
      '43-48,45-49\n' +
      '36-81,16-80\n' +
      '2-99,3-6\n' +
      '73-74,73-77\n' +
      '2-88,14-87\n' +
      '28-58,27-57\n' +
      '27-42,28-34\n' +
      '2-3,3-81\n' +
      '64-78,77-79\n' +
      '92-94,26-93\n' +
      '4-45,25-45\n' +
      '13-24,5-25\n' +
      '16-31,15-33\n' +
      '27-37,34-38\n' +
      '13-88,12-83\n' +
      '19-91,90-91\n' +
      '44-76,45-83\n' +
      '13-15,2-2\n' +
      '57-82,18-89\n' +
      '26-98,25-98\n' +
      '5-73,3-87\n' +
      '10-12,11-13\n' +
      '97-99,13-98\n' +
      '30-47,30-30\n' +
      '3-62,48-58\n' +
      '5-27,6-11\n' +
      '4-57,56-57\n' +
      '92-98,1-90\n' +
      '75-97,80-97\n' +
      '24-90,90-91\n' +
      '10-81,11-55\n' +
      '46-57,46-53\n' +
      '15-62,2-16\n' +
      '3-82,1-82\n' +
      '13-36,2-14\n' +
      '8-88,8-9\n' +
      '8-86,87-94\n' +
      '84-87,5-83\n' +
      '6-96,6-99\n' +
      '62-88,89-91\n' +
      '57-71,56-70\n' +
      '6-41,8-40\n' +
      '47-87,87-96\n' +
      '15-98,16-99\n' +
      '7-95,6-80\n' +
      '36-48,36-58\n' +
      '13-90,89-91\n' +
      '39-53,38-47\n' +
      '29-52,30-41\n' +
      '18-87,87-87\n' +
      '39-92,60-91\n' +
      '30-98,28-99\n' +
      '8-8,9-77\n' +
      '10-54,10-54\n' +
      '45-46,32-45\n' +
      '5-96,5-99\n' +
      '98-98,3-98\n' +
      '1-48,6-47\n' +
      '49-61,60-62\n' +
      '46-47,5-47\n' +
      '20-49,6-89\n' +
      '29-81,28-81\n' +
      '7-72,71-71\n' +
      '39-98,43-86\n' +
      '23-27,27-27\n' +
      '6-87,7-7\n' +
      '1-87,6-69\n' +
      '18-95,19-30\n' +
      '38-88,38-65\n' +
      '19-53,52-53\n' +
      '42-67,41-67\n' +
      '7-23,8-24\n' +
      '13-14,13-35\n' +
      '62-64,23-54\n' +
      '26-48,4-34\n' +
      '64-96,18-29\n' +
      '56-56,33-56\n' +
      '10-81,9-10\n' +
      '45-53,24-96\n' +
      '11-70,29-69\n' +
      '54-69,91-97\n' +
      '40-72,39-73\n' +
      '4-65,64-81\n' +
      '17-19,20-60\n' +
      '39-73,39-74\n' +
      '62-62,62-87\n' +
      '58-60,25-59\n' +
      '5-82,1-6\n' +
      '83-84,28-83\n' +
      '51-99,51-81\n' +
      '16-54,17-89\n' +
      '65-66,64-68\n' +
      '8-64,9-64\n' +
      '2-5,5-48\n' +
      '27-97,6-98\n' +
      '24-88,24-86\n' +
      '12-43,13-13\n' +
      '52-80,79-79\n' +
      '15-81,15-82\n' +
      '1-93,1-1\n' +
      '36-77,78-78\n' +
      '3-63,23-62\n' +
      '5-71,5-98\n' +
      '1-94,7-93\n' +
      '5-75,5-79\n' +
      '22-26,21-28\n' +
      '56-56,24-55\n' +
      '43-43,42-67\n' +
      '5-48,47-57\n' +
      '13-93,14-94\n' +
      '12-60,13-59\n' +
      '13-27,12-87\n' +
      '3-68,69-79\n' +
      '18-96,7-13\n' +
      '9-29,9-10\n' +
      '45-49,49-49\n' +
      '6-86,4-7\n' +
      '25-90,26-94\n' +
      '33-39,40-42\n' +
      '14-84,14-79\n' +
      '8-60,12-76\n' +
      '1-18,17-30\n' +
      '28-42,41-42\n' +
      '3-92,87-92\n' +
      '15-46,46-46\n' +
      '94-98,34-91\n' +
      '2-78,12-77\n' +
      '2-33,31-31\n' +
      '71-95,72-72\n' +
      '80-80,79-98\n' +
      '38-83,37-82\n' +
      '75-76,64-76\n' +
      '53-56,57-83\n' +
      '34-57,35-58\n' +
      '38-78,38-39\n' +
      '7-38,6-38\n' +
      '85-87,60-86\n' +
      '16-43,15-99\n' +
      '21-94,22-22\n' +
      '1-89,90-94\n' +
      '1-2,1-92\n' +
      '83-84,6-47\n' +
      '26-26,25-36\n' +
      '14-18,14-72\n' +
      '3-10,14-66\n' +
      '32-82,32-86\n' +
      '1-62,2-2\n' +
      '15-84,16-83\n' +
      '62-63,49-63\n' +
      '56-79,9-56\n' +
      '12-93,39-92\n' +
      '81-86,80-88\n' +
      '97-97,61-97\n' +
      '10-99,8-10\n' +
      '14-24,12-15\n' +
      '5-8,8-80\n' +
      '39-97,38-60\n' +
      '1-94,1-95\n' +
      '32-54,31-53\n' +
      '73-88,61-72\n' +
      '79-90,20-78\n' +
      '20-99,21-98\n' +
      '60-73,61-74\n' +
      '7-13,8-31\n' +
      '7-79,7-35\n' +
      '85-86,2-85\n' +
      '27-35,9-34\n' +
      '2-96,1-96\n' +
      '45-61,46-51\n' +
      '2-2,2-8\n' +
      '87-87,59-86\n' +
      '4-84,5-83\n' +
      '35-95,36-97\n' +
      '35-42,43-64\n' +
      '4-8,7-64\n' +
      '73-74,17-74\n' +
      '8-79,5-59\n' +
      '53-95,18-94\n' +
      '11-87,2-86\n' +
      '34-80,35-80\n' +
      '22-48,23-48\n' +
      '36-78,79-84\n' +
      '20-42,28-42\n' +
      '61-87,59-86\n' +
      '19-98,20-51\n' +
      '3-3,4-37\n' +
      '43-94,45-81\n' +
      '39-40,33-45\n' +
      '92-93,52-93\n' +
      '1-73,72-74\n' +
      '40-56,40-57\n' +
      '63-86,62-85\n' +
      '34-79,33-78\n' +
      '58-60,23-59\n' +
      '3-30,29-30\n' +
      '61-61,60-61\n' +
      '67-87,2-86\n' +
      '11-83,68-82\n' +
      '13-65,11-65\n' +
      '30-70,34-69\n' +
      '26-87,14-14\n' +
      '3-90,89-91\n' +
      '14-42,15-15\n' +
      '12-32,7-9\n' +
      '1-99,99-99\n' +
      '20-95,19-20\n' +
      '41-78,41-75\n' +
      '30-40,15-39\n' +
      '27-43,27-36\n' +
      '3-95,3-97\n' +
      '51-52,14-52\n' +
      '72-72,72-94\n' +
      '40-40,40-83\n' +
      '5-94,4-4\n' +
      '43-62,18-42\n' +
      '18-92,18-19\n' +
      '13-83,12-12\n' +
      '26-36,15-35\n' +
      '10-67,25-68\n' +
      '11-70,11-68\n' +
      '65-96,65-66\n' +
      '31-96,19-32\n' +
      '25-27,17-26\n' +
      '3-62,2-62\n' +
      '5-11,5-33\n' +
      '71-71,53-72\n' +
      '6-85,6-86\n' +
      '47-48,43-47\n' +
      '32-94,33-33\n' +
      '5-89,5-6\n' +
      '86-98,85-94\n' +
      '6-6,6-97\n' +
      '47-48,48-92\n' +
      '17-56,56-56\n' +
      '4-80,3-81\n' +
      '94-98,25-93\n' +
      '23-48,5-22\n' +
      '8-79,79-79\n' +
      '41-75,11-74\n' +
      '3-86,4-66\n' +
      '43-82,42-43\n' +
      '5-88,1-94\n' +
      '44-44,44-95\n' +
      '88-98,8-21\n' +
      '7-95,94-95\n' +
      '74-97,73-96\n' +
      '72-72,45-73\n' +
      '9-10,9-96\n' +
      '64-90,64-64\n' +
      '4-53,53-53\n' +
      '8-83,9-83\n' +
      '1-84,1-84\n' +
      '6-81,5-81\n' +
      '16-56,10-57\n' +
      '32-35,31-39\n' +
      '22-86,82-87\n' +
      '29-94,3-93\n' +
      '56-88,57-89\n' +
      '11-23,23-23\n' +
      '48-69,68-81\n' +
      '55-70,56-78\n' +
      '3-16,20-94\n' +
      '19-48,11-48\n' +
      '13-73,1-72\n' +
      '19-26,19-93\n' +
      '25-60,60-80\n' +
      '14-80,80-81\n' +
      '71-90,71-91\n' +
      '17-67,15-67\n' +
      '96-96,11-97\n' +
      '45-55,26-56\n' +
      '28-54,29-29\n' +
      '83-96,83-99\n' +
      '40-94,40-98\n' +
      '1-97,2-97\n' +
      '28-28,27-96\n' +
      '86-86,21-86\n' +
      '3-72,4-71\n' +
      '18-95,94-95\n' +
      '19-19,19-47\n' +
      '53-89,52-88\n' +
      '42-42,42-88\n' +
      '97-98,18-92\n' +
      '24-94,11-24\n' +
      '4-20,15-21\n' +
      '44-44,45-70\n' +
      '26-37,36-82\n' +
      '23-79,28-93\n' +
      '33-91,34-98\n' +
      '2-99,2-2\n' +
      '10-48,9-49\n' +
      '12-12,13-13\n' +
      '16-16,10-16\n' +
      '3-79,12-80\n' +
      '19-19,24-99\n' +
      '50-90,2-89\n' +
      '91-92,55-92\n' +
      '12-94,13-93\n' +
      '8-89,39-76\n' +
      '7-8,7-80\n' +
      '5-36,35-97\n' +
      '27-67,26-66\n' +
      '41-92,44-76\n' +
      '50-65,51-66\n' +
      '61-82,60-60\n' +
      '54-96,55-96\n' +
      '57-64,51-63\n' +
      '21-35,22-35\n' +
      '25-71,6-71\n' +
      '49-94,13-48\n' +
      '31-67,31-32\n' +
      '78-87,79-85\n' +
      '91-91,67-91\n' +
      '24-90,13-89\n' +
      '9-18,8-85\n' +
      '9-18,9-22\n' +
      '13-81,80-81\n' +
      '11-29,12-30\n' +
      '19-32,33-66\n' +
      '14-97,14-99\n' +
      '55-69,68-88\n' +
      '38-59,39-71\n' +
      '49-63,55-64\n' +
      '18-95,18-67\n' +
      '64-74,73-80\n' +
      '21-44,21-45\n' +
      '77-81,76-81\n' +
      '56-57,11-57\n' +
      '30-99,31-98\n' +
      '21-25,44-87\n' +
      '10-66,11-65\n' +
      '7-61,6-15\n' +
      '5-95,5-5\n' +
      '1-93,1-2\n' +
      '64-82,73-81\n' +
      '39-88,39-89\n' +
      '8-67,9-9\n' +
      '59-99,58-58\n' +
      '11-74,97-98\n' +
      '61-83,7-59\n' +
      '23-96,24-96\n' +
      '9-80,8-87\n' +
      '18-80,18-81\n' +
      '1-90,1-89\n' +
      '15-68,15-90\n' +
      '11-96,42-96\n' +
      '41-61,42-62\n' +
      '56-65,33-84\n' +
      '34-56,4-21\n' +
      '7-29,2-28\n' +
      '51-91,90-91\n' +
      '5-5,6-88\n' +
      '49-95,49-49\n' +
      '25-89,25-89\n' +
      '60-77,85-88\n' +
      '16-24,11-24\n' +
      '68-81,50-69\n' +
      '9-60,9-89\n' +
      '90-90,5-90\n' +
      '14-82,14-92\n' +
      '1-99,17-98\n' +
      '34-69,35-68\n' +
      '4-38,10-34\n' +
      '9-64,57-81\n' +
      '24-96,95-95\n' +
      '5-98,21-93\n' +
      '11-11,10-53\n' +
      '93-93,25-93\n' +
      '2-2,3-96\n' +
      '3-3,3-98\n' +
      '32-47,33-33\n' +
      '51-68,25-69\n' +
      '89-97,59-96\n' +
      '15-75,76-76\n' +
      '15-92,9-93\n' +
      '15-27,5-16\n' +
      '89-89,6-98\n' +
      '14-92,90-91\n' +
      '10-27,27-29\n' +
      '26-82,26-81\n' +
      '58-86,58-58\n' +
      '8-80,3-8\n' +
      '55-56,4-59\n' +
      '44-96,44-97\n' +
      '1-89,1-1\n' +
      '22-35,23-34\n' +
      '6-86,3-6\n' +
      '2-44,1-14\n' +
      '10-80,9-64\n' +
      '17-79,18-85\n' +
      '98-98,29-98\n' +
      '39-99,38-39\n' +
      '73-75,68-74\n' +
      '11-34,11-12\n' +
      '19-39,18-34\n' +
      '31-78,31-90\n' +
      '28-69,29-69\n' +
      '32-99,22-33\n' +
      '11-78,79-94\n' +
      '17-51,52-52\n' +
      '1-94,8-44\n' +
      '2-95,2-95\n' +
      '9-92,8-92\n' +
      '83-94,1-84\n' +
      '43-45,1-44\n' +
      '19-56,18-32\n' +
      '64-88,21-88\n' +
      '10-63,9-63\n' +
      '13-57,57-57\n' +
      '4-36,33-36\n' +
      '10-82,82-90\n' +
      '43-56,43-55\n' +
      '37-99,98-99\n' +
      '14-94,15-92\n' +
      '24-89,89-89\n' +
      '14-49,1-72\n' +
      '15-81,81-88\n' +
      '18-26,25-95\n' +
      '91-97,48-92\n' +
      '46-79,92-94\n' +
      '55-60,59-96\n' +
      '5-98,4-99\n' +
      '22-94,23-94\n' +
      '60-64,49-63\n' +
      '69-94,43-70\n' +
      '58-97,34-59\n' +
      '63-92,42-64\n' +
      '16-93,11-14\n' +
      '5-6,6-18\n' +
      '19-78,79-94\n' +
      '96-98,4-74\n' +
      '11-92,12-92\n' +
      '99-99,6-98\n' +
      '95-95,5-95\n' +
      '16-52,16-52\n' +
      '90-90,61-91\n' +
      '24-39,23-77\n' +
      '27-64,26-82\n' +
      '1-2,1-99\n' +
      '31-62,32-32\n' +
      '45-73,60-74\n' +
      '11-12,11-89\n' +
      '2-91,90-96\n' +
      '21-47,22-50\n' +
      '95-95,19-67\n' +
      '10-93,93-99\n' +
      '5-79,4-76\n' +
      '9-70,9-98\n' +
      '58-87,59-87\n' +
      '4-78,5-78\n' +
      '33-50,32-40\n' +
      '47-98,46-75\n' +
      '40-92,41-66\n' +
      '56-85,55-56\n' +
      '81-81,36-82\n' +
      '11-44,11-12\n' +
      '3-3,2-86\n' +
      '83-83,9-82\n' +
      '21-96,21-35\n' +
      '80-85,73-85\n' +
      '79-79,78-94\n' +
      '97-97,7-96\n' +
      '27-92,21-24\n' +
      '58-77,28-57\n' +
      '14-87,19-86\n' +
      '15-96,45-96\n' +
      '5-78,5-90\n' +
      '95-95,17-96\n' +
      '1-35,1-1\n' +
      '12-93,11-94\n' +
      '89-90,23-90\n' +
      '54-98,55-98\n' +
      '13-81,14-56\n' +
      '8-67,9-57\n' +
      '2-59,5-48\n' +
      '46-54,47-92\n' +
      '8-35,8-8\n' +
      '98-99,17-97\n' +
      '27-90,27-91\n' +
      '10-34,33-33\n' +
      '98-99,10-99\n' +
      '40-73,40-74\n' +
      '13-14,13-47\n' +
      '15-22,16-21\n' +
      '97-98,46-90\n' +
      '5-46,25-46\n' +
      '25-82,15-81\n' +
      '36-57,53-53\n' +
      '42-92,43-92\n' +
      '59-74,75-94\n' +
      '27-87,27-67\n' +
      '85-86,2-86\n' +
      '37-53,36-54\n' +
      '99-99,12-96\n' +
      '91-98,90-97\n' +
      '19-43,85-96\n' +
      '99-99,7-99\n' +
      '71-73,16-72\n' +
      '50-99,49-49\n' +
      '24-95,96-97\n' +
      '43-43,42-97\n' +
      '33-96,34-98\n' +
      '4-5,4-86\n' +
      '15-87,4-86\n' +
      '41-96,41-42\n' +
      '89-94,11-32\n' +
      '83-91,71-84\n' +
      '2-85,3-85\n' +
      '53-53,53-87\n' +
      '2-69,68-77\n' +
      '90-91,17-91\n' +
      '49-50,69-92\n' +
      '15-18,15-97\n' +
      '38-79,47-78\n' +
      '4-60,5-5\n' +
      '20-92,47-91\n' +
      '99-99,1-94\n' +
      '70-71,10-71\n' +
      '45-49,12-48\n' +
      '33-35,36-54\n' +
      '2-85,99-99\n' +
      '76-91,25-90\n' +
      '69-72,71-80\n' +
      '6-17,5-92\n' +
      '3-88,2-87\n' +
      '31-39,31-32\n' +
      '33-93,73-94\n' +
      '37-97,58-97\n' +
      '16-16,15-15\n' +
      '7-98,9-97\n' +
      '35-53,53-53\n' +
      '83-83,57-89\n' +
      '82-83,14-83\n' +
      '39-45,82-87\n' +
      '59-66,58-65\n' +
      '21-96,33-97\n' +
      '65-66,15-72\n' +
      '6-93,6-7\n' +
      '14-92,15-15\n' +
      '5-35,34-91\n' +
      '19-91,18-92\n' +
      '40-42,41-73\n' +
      '21-70,21-21\n' +
      '55-95,54-94\n' +
      '36-77,77-77\n' +
      '81-97,71-80\n' +
      '49-67,43-48\n' +
      '25-93,24-94\n' +
      '53-91,18-90\n' +
      '28-52,35-51\n' +
      '75-75,65-76\n' +
      '73-73,51-72\n' +
      '3-3,3-57\n' +
      '97-98,6-98\n' +
      '19-73,74-74\n' +
      '65-86,64-64\n' +
      '43-90,44-91\n' +
      '3-98,2-97\n' +
      '5-84,98-99\n' +
      '55-98,54-77\n' +
      '22-29,21-22\n' +
      '10-72,5-73\n' +
      '52-61,53-95\n' +
      '4-80,80-80\n' +
      '79-81,77-80\n' +
      '19-97,2-97\n' +
      '76-95,96-97\n' +
      '11-84,11-96\n' +
      '69-79,70-89\n' +
      '7-20,3-8\n' +
      '10-96,9-96\n' +
      '5-28,5-29\n' +
      '21-28,21-88\n' +
      '40-46,39-47\n' +
      '26-38,26-37\n' +
      '30-97,97-97\n' +
      '36-59,35-60\n' +
      '1-2,1-26\n' +
      '45-65,4-46\n' +
      '92-95,58-93\n' +
      '58-70,66-70\n' +
      '6-8,7-88\n' +
      '29-72,29-73\n' +
      '77-92,77-91\n' +
      '86-92,60-93\n' +
      '55-75,55-56\n' +
      '9-58,10-10\n' +
      '4-36,4-37\n' +
      '3-94,5-95\n' +
      '4-98,97-99\n' +
      '11-86,12-87\n' +
      '94-94,16-63\n' +
      '4-97,96-98\n' +
      '22-74,21-44\n' +
      '4-6,4-5\n' +
      '5-54,5-5\n' +
      '21-50,21-86\n' +
      '27-84,28-85\n' +
      '30-95,30-30\n' +
      '49-49,50-50\n' +
      '3-55,2-56\n' +
      '14-30,14-14\n' +
      '41-77,40-81\n' +
      '35-95,30-96\n' +
      '51-91,52-83\n' +
      '52-52,16-52\n' +
      '55-56,4-63\n' +
      '16-63,15-64\n' +
      '3-3,4-52\n' +
      '10-66,11-11\n' +
      '11-64,12-71\n' +
      '5-91,4-92\n' +
      '47-60,60-60\n' +
      '32-95,94-98\n' +
      '78-79,78-79\n' +
      '5-72,6-72\n' +
      '64-81,47-82\n' +
      '3-64,7-64';

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Day4Service],
    }).compile();

    service = module.get<Day4Service>(Day4Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('test puzzleOneTestInput', () => {
    const testInputArray: string[] = puzzleOneTestInput.split('\n');
    expect(service.findPairs(testInputArray, true)).toBe(2);
  });

  it('test puzzleTwoTestInput', () => {
    const testInputArray: string[] = puzzleOneTestInput.split('\n');
    expect(service.findPairs(testInputArray, false)).toBe(4);
  });

  it('test puzzleOneInput', () => {
    const input: string[] = puzzleOneInput.split('\n');
    expect(service.findPairs(input, true)).toBe(536);
  });

  it('test puzzleTwoInput', () => {
    const input: string[] = puzzleOneInput.split('\n');
    expect(service.findPairs(input, false)).toBe(845);
  });
});
